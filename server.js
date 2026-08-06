const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const ROOT = __dirname;

function loadEnvFile() {
  const envPath = path.join(ROOT, ".env");
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const index = trimmed.indexOf("=");
    if (index <= 0) return;
    const key = trimmed.slice(0, index).trim();
    let value = trimmed.slice(index + 1).trim();
    value = value.replace(/^["']|["']$/g, "");
    if (key && process.env[key] == null) process.env[key] = value;
  });
}

loadEnvFile();

const PORT = Number(process.env.PORT || 8766);
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-5.5";
const AI_PROVIDER = (process.env.AI_PROVIDER || "auto").toLowerCase();
const OLLAMA_URL = (process.env.OLLAMA_URL || "http://localhost:11434").replace(/\/$/, "");
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "qwen2.5:7b";
const PDF_TEXT_LIMIT = Number(process.env.PDF_TEXT_LIMIT || 24000);
const OLLAMA_TEXT_LIMIT = Number(process.env.OLLAMA_TEXT_LIMIT || 18000);
const OLLAMA_NUM_PREDICT = Number(process.env.OLLAMA_NUM_PREDICT || 14000);
const MAX_UPLOAD_BYTES = Number(process.env.MAX_UPLOAD_BYTES || 25 * 1024 * 1024);
const DATA_DIR = path.join(ROOT, "data");
const UPLOAD_DIR = path.join(ROOT, "uploads");
const JOURNEYS_FILE = path.join(DATA_DIR, "journeys.json");
const STUDENT_PROGRESS_FILE = path.join(DATA_DIR, "student-progress.json");
const QUESTIONS_FILE = path.join(DATA_DIR, "questions.json");
const STUDENT_JOURNEY_LIMIT = Number(process.env.STUDENT_JOURNEY_LIMIT || 10);
const SUPABASE_TIMEOUT_MS = Number(process.env.SUPABASE_TIMEOUT_MS || 8000);
const SUPABASE_URL = (process.env.SUPABASE_URL || "").replace(/\/$/, "");
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY || "";
const SUPABASE_ENABLED = Boolean(
  SUPABASE_URL &&
  SUPABASE_SERVICE_ROLE_KEY &&
  !SUPABASE_URL.includes("SEU-PROJETO") &&
  !SUPABASE_SERVICE_ROLE_KEY.includes("cole_a_service_role_key")
);

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function ensureStorage() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  if (!fs.existsSync(JOURNEYS_FILE)) fs.writeFileSync(JOURNEYS_FILE, "[]\n");
  if (!fs.existsSync(STUDENT_PROGRESS_FILE)) fs.writeFileSync(STUDENT_PROGRESS_FILE, "{}\n");
  if (!fs.existsSync(QUESTIONS_FILE)) fs.writeFileSync(QUESTIONS_FILE, "{}\n");
}

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload, null, 2);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  });
  res.end(body);
}

function sendText(res, status, message) {
  res.writeHead(status, { "content-type": "text/plain; charset=utf-8" });
  res.end(message);
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let total = 0;
    req.on("data", (chunk) => {
      total += chunk.length;
      if (total > MAX_UPLOAD_BYTES) {
        reject(new Error("Arquivo maior que o limite de " + Math.round(MAX_UPLOAD_BYTES / 1024 / 1024) + " MB."));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function parseContentDisposition(value = "") {
  const result = {};
  value.split(";").map((part) => part.trim()).forEach((part) => {
    const [rawKey, ...rest] = part.split("=");
    if (!rawKey || !rest.length) return;
    const key = rawKey.toLowerCase();
    const val = rest.join("=").trim().replace(/^"|"$/g, "");
    result[key] = val;
  });
  return result;
}

function parseMultipart(buffer, boundary) {
  const delimiter = Buffer.from("--" + boundary);
  const parts = {};
  let cursor = buffer.indexOf(delimiter);
  while (cursor !== -1) {
    const next = buffer.indexOf(delimiter, cursor + delimiter.length);
    if (next === -1) break;
    let part = buffer.slice(cursor + delimiter.length, next);
    if (part.slice(0, 2).toString() === "\r\n") part = part.slice(2);
    if (part.slice(-2).toString() === "\r\n") part = part.slice(0, -2);
    if (part.length && part.slice(0, 2).toString() !== "--") {
      const headerEnd = part.indexOf(Buffer.from("\r\n\r\n"));
      if (headerEnd > 0) {
        const headerText = part.slice(0, headerEnd).toString("utf8");
        const body = part.slice(headerEnd + 4);
        const headers = Object.fromEntries(headerText.split("\r\n").map((line) => {
          const index = line.indexOf(":");
          return index > -1 ? [line.slice(0, index).toLowerCase(), line.slice(index + 1).trim()] : [line.toLowerCase(), ""];
        }));
        const disposition = parseContentDisposition(headers["content-disposition"] || "");
        if (disposition.name) {
          parts[disposition.name] = {
            filename: disposition.filename,
            contentType: headers["content-type"] || "text/plain",
            data: body,
          };
        }
      }
    }
    cursor = next;
  }
  return parts;
}

function safeFilename(name = "material.pdf") {
  const base = path.basename(name).replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120) || "material.pdf";
  return base.toLowerCase().endsWith(".pdf") ? base : base + ".pdf";
}

function hasPdfSignature(data) {
  if (!Buffer.isBuffer(data) || data.length < 8) return false;
  const header = data.subarray(0, Math.min(data.length, 1024)).toString("latin1");
  const trailer = data.subarray(Math.max(0, data.length - 2048)).toString("latin1");
  return header.includes("%PDF-") && trailer.includes("%%EOF");
}

function normalizeLookup(value = "") {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeStudentShift(value = "") {
  const normalized = normalizeLookup(value);
  return normalized === "nao informado" ? "" : normalized;
}

function getStudentProgressKey(studentName, studentClassroom, studentShift, journeyId) {
  return [normalizeLookup(studentName), normalizeLookup(studentClassroom), normalizeStudentShift(studentShift), journeyId].join("::");
}

function getLegacyStudentProgressKey(studentName, studentClassroom, journeyId) {
  return [normalizeLookup(studentName), normalizeLookup(studentClassroom), journeyId].join("::");
}

function loadStudentProgress() {
  ensureStorage();
  try {
    return JSON.parse(fs.readFileSync(STUDENT_PROGRESS_FILE, "utf8"));
  } catch {
    return {};
  }
}

function saveStudentProgress(progress) {
  ensureStorage();
  fs.writeFileSync(STUDENT_PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

function hasSupabase() {
  return SUPABASE_ENABLED;
}

async function supabaseRequest(pathname, options = {}) {
  if (!hasSupabase()) throw new Error("Supabase não configurado.");
  const response = await fetch(SUPABASE_URL + pathname, {
    ...options,
    signal: options.signal || AbortSignal.timeout(SUPABASE_TIMEOUT_MS),
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      authorization: "Bearer " + SUPABASE_SERVICE_ROLE_KEY,
      "content-type": "application/json",
      ...(options.headers || {}),
    },
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    const message = data?.message || data?.error || "Supabase retornou HTTP " + response.status + ".";
    throw new Error(message);
  }
  return data;
}

function mapJourneyRecordToRow(record) {
  const student = record.metadata?.student || {};
  return {
    id: record.id,
    created_at: record.createdAt,
    pdf_file: record.pdfFile,
    metadata: record.metadata || {},
    provider: record.provider || "unknown",
    answer_review_status: record.answerReviewStatus || null,
    pdf_text_extracted: Boolean(record.pdfTextExtracted),
    journey: record.journey || {},
    student_name: student.studentName || "",
    student_classroom: student.studentClassroom || "",
    student_shift: student.studentShift || "",
    student_name_norm: normalizeLookup(student.studentName || ""),
    student_classroom_norm: normalizeLookup(student.studentClassroom || ""),
    student_shift_norm: normalizeStudentShift(student.studentShift || ""),
    subject: student.subject || "",
  };
}

function mapJourneyRowToRecord(row) {
  const metadata = row.metadata || {};
  return {
    id: row.id,
    createdAt: row.created_at,
    pdfFile: row.pdf_file,
    metadata: {
      ...metadata,
      student: {
        ...(metadata.student || {}),
        studentName: metadata.student?.studentName || row.student_name || "",
        studentClassroom: metadata.student?.studentClassroom || row.student_classroom || "",
        studentShift: metadata.student?.studentShift || row.student_shift || "",
      },
    },
    provider: row.provider,
    answerReviewStatus: row.answer_review_status,
    pdfTextExtracted: row.pdf_text_extracted,
    journey: row.journey || {},
  };
}

async function saveJourneyToSupabase(record) {
  await supabaseRequest("/rest/v1/journeys?on_conflict=id", {
    method: "POST",
    headers: { prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify(mapJourneyRecordToRow(record)),
  });
}

async function loadStudentJourneysFromSupabase(name, classroom, shift = "") {
  const normalizedName = encodeURIComponent(normalizeLookup(name));
  const normalizedClassroom = encodeURIComponent(normalizeLookup(classroom));
  const normalizedShift = encodeURIComponent(normalizeStudentShift(shift));
  const rows = await supabaseRequest(
    "/rest/v1/journeys?select=*&student_name_norm=eq." + normalizedName +
      "&student_classroom_norm=eq." + normalizedClassroom +
      "&student_shift_norm=eq." + normalizedShift +
      "&order=created_at.desc&limit=" + STUDENT_JOURNEY_LIMIT
  );
  return Array.isArray(rows) ? rows.map(mapJourneyRowToRecord).filter((record) => !isJourneyArchived(record)) : [];
}

function getJourneyManagement(record = {}) {
  return record.metadata?.management || {};
}

function isJourneyArchived(record = {}) {
  return Boolean(getJourneyManagement(record).archivedAt);
}

function mapProgressRowToProgress(row, totalQuestions) {
  return {
    status: row?.status || "not_started",
    completedQuestions: Number(row?.completed_questions || 0),
    correctQuestions: Number(row?.correct_questions || 0),
    totalQuestions,
    xp: Number(row?.xp || 0),
    updatedAt: row?.updated_at || null,
    answers: row?.answers || {},
  };
}

async function loadProgressRowsFromSupabase(name, classroom, shift = "", journeyIds = []) {
  if (!journeyIds.length) return {};
  const normalizedName = encodeURIComponent(normalizeLookup(name));
  const normalizedClassroom = encodeURIComponent(normalizeLookup(classroom));
  const normalizedShift = encodeURIComponent(normalizeStudentShift(shift));
  const ids = journeyIds.map((id) => String(id).replace(/[^a-zA-Z0-9-]/g, "")).filter(Boolean);
  const rows = await supabaseRequest(
    "/rest/v1/student_progress?select=*&student_name_norm=eq." + normalizedName +
      "&student_classroom_norm=eq." + normalizedClassroom +
      "&student_shift_norm=eq." + normalizedShift +
      "&journey_id=in.(" + ids.join(",") + ")"
  );
  const byJourney = {};
  (Array.isArray(rows) ? rows : []).forEach((row) => {
    byJourney[row.journey_id] = row;
  });
  return byJourney;
}

async function saveStudentProgressToSupabase(progress) {
  const row = {
    student_name: progress.studentName,
    student_classroom: progress.studentClassroom,
    student_shift: progress.studentShift || "",
    student_name_norm: normalizeLookup(progress.studentName),
    student_classroom_norm: normalizeLookup(progress.studentClassroom),
    student_shift_norm: normalizeStudentShift(progress.studentShift),
    journey_id: progress.journeyId,
    answers: progress.answers || {},
    total_questions: Number(progress.totalQuestions || 0),
    completed_questions: Number(progress.completedQuestions || 0),
    correct_questions: Number(progress.correctQuestions || 0),
    xp: Number(progress.xp || 0),
    status: progress.status || "not_started",
    updated_at: progress.updatedAt || new Date().toISOString(),
  };
  const data = await supabaseRequest("/rest/v1/student_progress?on_conflict=student_name_norm,student_classroom_norm,student_shift_norm,journey_id", {
    method: "POST",
    headers: { prefer: "resolution=merge-duplicates,return=representation" },
    body: JSON.stringify(row),
  });
  return Array.isArray(data) ? data[0] : data;
}

function getJourneyQuestionTotal(journey = {}) {
  return (journey.lessons || []).reduce((sum, lesson) => {
    return sum + (Array.isArray(lesson.practice?.questions) ? lesson.practice.questions.length : 0);
  }, 0);
}

async function readJsonBody(req) {
  const body = await readRequestBody(req);
  if (!body.length) return {};
  return JSON.parse(body.toString("utf8"));
}

function getStudentJourneySearchIdentity(searchParams) {
  return {
    name: searchParams.get("name") || searchParams.get("studentName") || "",
    classroom: searchParams.get("classroom") || searchParams.get("studentClassroom") || "",
    shift: searchParams.get("shift") || searchParams.get("studentShift") || "",
  };
}

function buildStudentJourneysPayload(name, classroom, shift, journeyRecords, progressByJourneyId = {}) {
  const journeys = journeyRecords.map((record) => {
    const student = record.metadata?.student || {};
    const totalQuestions = getJourneyQuestionTotal(record.journey);
    const saved = progressByJourneyId[record.id] || {};
    return {
      id: record.id,
      createdAt: record.createdAt,
      provider: record.provider,
      answerReviewStatus: record.answerReviewStatus,
      pdfTextExtracted: record.pdfTextExtracted,
      metadata: record.metadata,
      journey: record.journey,
      progress: {
        status: saved.status || "not_started",
        completedQuestions: Number(saved.completedQuestions || 0),
        correctQuestions: Number(saved.correctQuestions || 0),
        totalQuestions,
        xp: Number(saved.xp || 0),
        updatedAt: saved.updatedAt || null,
        answers: saved.answers || {},
      },
    };
  });
  return { studentName: name, studentClassroom: classroom, studentShift: shift, journeys, storage: hasSupabase() ? "supabase" : "local" };
}

function getStudentJourneysPayloadLocal(searchParams) {
  const { name, classroom, shift } = getStudentJourneySearchIdentity(searchParams);
  const normalizedName = normalizeLookup(name);
  const normalizedClassroom = normalizeLookup(classroom);
  const normalizedShift = normalizeStudentShift(shift);
  const progress = loadStudentProgress();
  const records = sortJourneyRecords(loadJourneys().filter((record) => {
    const student = record.metadata?.student || {};
    return !isJourneyArchived(record)
      && normalizeLookup(student.studentName) === normalizedName
      && normalizeLookup(student.studentClassroom) === normalizedClassroom
      && normalizeStudentShift(student.studentShift) === normalizedShift;
  })).slice(0, STUDENT_JOURNEY_LIMIT);
  const progressByJourneyId = {};
  records.forEach((record) => {
    const student = record.metadata?.student || {};
    const key = getStudentProgressKey(student.studentName, student.studentClassroom, student.studentShift, record.id);
    const legacyKey = getLegacyStudentProgressKey(student.studentName, student.studentClassroom, record.id);
    progressByJourneyId[record.id] = progress[key] || progress[legacyKey] || {};
  });
  return buildStudentJourneysPayload(name, classroom, shift, records, progressByJourneyId);
}

function getLocalStudentJourneyRecords(name, classroom, shift = "") {
  const normalizedName = normalizeLookup(name);
  const normalizedClassroom = normalizeLookup(classroom);
  const normalizedShift = normalizeStudentShift(shift);
  return loadJourneys().filter((record) => {
    const student = record.metadata?.student || {};
    return !isJourneyArchived(record)
      && normalizeLookup(student.studentName) === normalizedName
      && normalizeLookup(student.studentClassroom) === normalizedClassroom
      && normalizeStudentShift(student.studentShift) === normalizedShift;
  });
}

function sortJourneyRecords(records) {
  return records.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
}

async function getStudentJourneysPayload(searchParams) {
  const { name, classroom, shift } = getStudentJourneySearchIdentity(searchParams);
  if (hasSupabase()) {
    try {
      const supabaseRecords = await loadStudentJourneysFromSupabase(name, classroom, shift);
      const localRecords = getLocalStudentJourneyRecords(name, classroom, shift);
      const byId = new Map();
      [...localRecords, ...supabaseRecords].forEach((record) => {
        if (record?.id) byId.set(record.id, record);
      });
      const records = sortJourneyRecords([...byId.values()]).slice(0, STUDENT_JOURNEY_LIMIT);
      const supabaseProgressByJourneyId = await loadProgressRowsFromSupabase(name, classroom, shift, records.map((record) => record.id));
      const localProgress = loadStudentProgress();
      const progressByJourneyId = {};
      records.forEach((record) => {
        const student = record.metadata?.student || {};
        const localKey = getStudentProgressKey(student.studentName, student.studentClassroom, student.studentShift, record.id);
        const totalQuestions = getJourneyQuestionTotal(record.journey);
        const legacyKey = getLegacyStudentProgressKey(student.studentName, student.studentClassroom, record.id);
        progressByJourneyId[record.id] = supabaseProgressByJourneyId[record.id]
          ? mapProgressRowToProgress(supabaseProgressByJourneyId[record.id], totalQuestions)
          : (localProgress[localKey] || localProgress[legacyKey] || {});
      });
      return {
        ...buildStudentJourneysPayload(name, classroom, shift, records, progressByJourneyId),
        storage: "supabase+local",
      };
    } catch (error) {
      console.warn("Supabase indisponível para consulta de trilhas; usando armazenamento local:", error.message);
    }
  }
  return getStudentJourneysPayloadLocal(searchParams);
}

async function handleStudentProgress(req, res) {
  try {
    const payload = await readJsonBody(req);
    const studentName = payload.studentName || "";
    const studentClassroom = payload.studentClassroom || "";
    const studentShift = payload.studentShift || "";
    const journeyId = payload.journeyId || "";
    if (!studentName || !studentClassroom || !studentShift || !journeyId) {
      return sendJson(res, 400, { error: "Nome, turma, turno e trilha são obrigatórios." });
    }

    const progress = loadStudentProgress();
    const key = getStudentProgressKey(studentName, studentClassroom, studentShift, journeyId);
    const totalQuestions = Number(payload.totalQuestions || 0);
    const completedQuestions = Number(payload.completedQuestions || 0);
    const correctQuestions = Number(payload.correctQuestions || 0);
    progress[key] = {
      studentName,
      studentClassroom,
      studentShift,
      journeyId,
      answers: payload.answers || {},
      totalQuestions,
      completedQuestions,
      correctQuestions,
      xp: Number(payload.xp || correctQuestions * 10),
      status: totalQuestions > 0 && completedQuestions >= totalQuestions ? "completed" : completedQuestions > 0 ? "in_progress" : "not_started",
      updatedAt: new Date().toISOString(),
    };
    saveStudentProgress(progress);
    if (hasSupabase()) {
      try {
        await saveStudentProgressToSupabase(progress[key]);
      } catch (supabaseError) {
        console.warn("Não foi possível salvar progresso no Supabase; progresso local preservado:", supabaseError.message);
      }
    }
    sendJson(res, 200, { ok: true, progress: progress[key], storage: hasSupabase() ? "supabase" : "local" });
  } catch (error) {
    sendJson(res, 500, { error: error.message || "Não foi possível salvar o progresso." });
  }
}


function loadJourneys() {
  ensureStorage();
  try {
    return JSON.parse(fs.readFileSync(JOURNEYS_FILE, "utf8"));
  } catch {
    return [];
  }
}

function saveJourneyLocal(record) {
  const journeys = loadJourneys();
  journeys.unshift(record);
  fs.writeFileSync(JOURNEYS_FILE, JSON.stringify(journeys.slice(0, 500), null, 2));
}

function writeJourneysLocal(records) {
  ensureStorage();
  fs.writeFileSync(JOURNEYS_FILE, JSON.stringify(records.slice(0, 500), null, 2));
}

async function loadAllJourneysFromSupabase() {
  const rows = await supabaseRequest("/rest/v1/journeys?select=*&order=created_at.desc&limit=500");
  return Array.isArray(rows) ? rows.map(mapJourneyRowToRecord) : [];
}

async function loadManagedJourneys() {
  const byId = new Map();
  loadJourneys().forEach((record) => record?.id && byId.set(record.id, record));
  if (hasSupabase()) {
    try {
      const remote = await loadAllJourneysFromSupabase();
      remote.forEach((record) => record?.id && byId.set(record.id, record));
    } catch (error) {
      console.warn("Não foi possível carregar todas as trilhas do Supabase:", error.message);
    }
  }
  return sortJourneyRecords([...byId.values()]);
}

function buildManagedJourneySummary(record) {
  const student = record.metadata?.student || {};
  const management = getJourneyManagement(record);
  return {
    id: record.id,
    title: record.journey?.title || "Trilha personalizada",
    studentName: student.studentName || "Aluno não informado",
    studentClassroom: student.studentClassroom || "Turma não informada",
    studentShift: student.studentShift || "Não informado",
    subject: student.subject || "",
    pdfFile: record.pdfFile || "",
    createdAt: record.createdAt || null,
    updatedAt: management.updatedAt || record.createdAt || null,
    archivedAt: management.archivedAt || null,
    provider: record.provider || "unknown",
  };
}

async function handleManagedJourneysList(_req, res) {
  try {
    const records = await loadManagedJourneys();
    sendJson(res, 200, { journeys: records.map(buildManagedJourneySummary), storage: hasSupabase() ? "supabase+local" : "local" });
  } catch (error) {
    sendJson(res, 500, { error: error.message || "Não foi possível listar as trilhas." });
  }
}

async function handleJourneyManagement(req, res, journeyId) {
  try {
    const payload = await readJsonBody(req);
    const records = loadJourneys();
    const index = records.findIndex((record) => record.id === journeyId);
    let record = index >= 0 ? records[index] : null;
    if (!record && hasSupabase()) {
      const rows = await supabaseRequest("/rest/v1/journeys?select=*&id=eq." + encodeURIComponent(journeyId) + "&limit=1");
      record = Array.isArray(rows) && rows[0] ? mapJourneyRowToRecord(rows[0]) : null;
    }
    if (!record) return sendJson(res, 404, { error: "Trilha não encontrada." });

    const action = payload.action || "rename";
    const now = new Date().toISOString();
    const metadata = { ...(record.metadata || {}) };
    metadata.management = { ...(metadata.management || {}), updatedAt: now };

    if (action === "rename") {
      const title = String(payload.title || "").trim().slice(0, 120);
      if (!title) return sendJson(res, 400, { error: "Informe um nome para a trilha." });
      record.journey = { ...(record.journey || {}), title };
    } else if (action === "archive") {
      metadata.management.archivedAt = now;
    } else if (action === "restore") {
      metadata.management.archivedAt = null;
    } else {
      return sendJson(res, 400, { error: "Ação de gerenciamento inválida." });
    }
    record.metadata = metadata;

    if (index >= 0) records[index] = record;
    else records.unshift(record);
    writeJourneysLocal(records);
    if (hasSupabase()) {
      try {
        await saveJourneyToSupabase(record);
      } catch (error) {
        console.warn("Alteração de trilha preservada localmente; Supabase indisponível:", error.message);
      }
    }
    sendJson(res, 200, { ok: true, journey: buildManagedJourneySummary(record) });
  } catch (error) {
    sendJson(res, 500, { error: error.message || "Não foi possível atualizar a trilha." });
  }
}

async function handleJourneyDelete(_req, res, journeyId) {
  try {
    const records = loadJourneys();
    const exists = records.some((record) => record.id === journeyId);
    writeJourneysLocal(records.filter((record) => record.id !== journeyId));
    const progress = loadStudentProgress();
    Object.keys(progress).forEach((key) => {
      if (progress[key]?.journeyId === journeyId || key.endsWith("::" + journeyId)) delete progress[key];
    });
    saveStudentProgress(progress);
    if (hasSupabase()) {
      try {
        await supabaseRequest("/rest/v1/journeys?id=eq." + encodeURIComponent(journeyId), { method: "DELETE" });
      } catch (error) {
        console.warn("Trilha removida localmente; exclusão no Supabase falhou:", error.message);
      }
    }
    sendJson(res, 200, { ok: true, deleted: exists || hasSupabase(), id: journeyId });
  } catch (error) {
    sendJson(res, 500, { error: error.message || "Não foi possível excluir a trilha." });
  }
}

function loadQuestions() {
  ensureStorage();
  try {
    const parsed = JSON.parse(fs.readFileSync(QUESTIONS_FILE, "utf8"));
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function saveQuestions(subjects) {
  ensureStorage();
  fs.writeFileSync(QUESTIONS_FILE, JSON.stringify(subjects, null, 2));
}

function normalizeManagedQuestion(subject, source = {}, existing = null) {
  const type = source.type === "dissertativa" ? "dissertativa" : "multipla_escolha";
  const text = String(source.text || "").trim();
  const skill = String(source.skill || "Habilidade não informada").trim();
  if (!text) throw new Error("O enunciado é obrigatório.");
  const id = Number(source.id ?? existing?.id);
  if (!Number.isFinite(id) || id <= 0) throw new Error("O identificador da questão deve ser um número positivo.");
  const difficulty = ["fácil", "médio", "difícil"].includes(source.difficulty) ? source.difficulty : "médio";
  const cognitiveLevel = ["memoria", "interpretacao", "raciocinio"].includes(source.cognitiveLevel)
    ? source.cognitiveLevel
    : "interpretacao";
  const result = {
    ...(existing || {}),
    ...source,
    id,
    type,
    text,
    skill,
    difficulty,
    cognitiveLevel,
    basePoints: Number(source.basePoints || ({ "fácil": 5, "médio": 10, "difícil": 15 }[difficulty])),
    version: Number(existing?.version || 0) + 1,
    active: source.active !== false,
    updatedAt: new Date().toISOString(),
  };
  if (type === "multipla_escolha") {
    const options = Array.isArray(source.options) ? source.options : [];
    if (options.length < 2) throw new Error("A questão objetiva precisa de pelo menos duas alternativas.");
    result.options = options.map((option) => ({ label: String(option.label || option.text || option).trim(), correct: Boolean(option.correct) }));
    if (result.options.filter((option) => option.correct).length !== 1) throw new Error("Marque exatamente uma alternativa correta.");
    delete result.idealAnswer;
  } else {
    result.idealAnswer = String(source.idealAnswer || "").trim();
    if (!result.idealAnswer) throw new Error("Informe uma resposta de referência.");
    delete result.options;
  }
  return result;
}

async function handleQuestionsList(_req, res) {
  sendJson(res, 200, { subjects: loadQuestions() });
}

async function handleQuestionCreate(req, res) {
  try {
    const payload = await readJsonBody(req);
    const subject = normalizeLookup(payload.subject).replace(/\s+/g, "_");
    if (!subject) return sendJson(res, 400, { error: "Informe a matéria." });
    const subjects = loadQuestions();
    const questions = Array.isArray(subjects[subject]) ? subjects[subject] : [];
    const nextId = questions.reduce((max, question) => Math.max(max, Number(question.id || 0)), 0) + 1;
    const question = normalizeManagedQuestion(subject, { ...(payload.question || {}), id: payload.question?.id || nextId });
    if (questions.some((item) => Number(item.id) === question.id)) return sendJson(res, 409, { error: "Já existe uma questão com esse identificador." });
    subjects[subject] = [...questions, question].sort((a, b) => Number(a.id) - Number(b.id));
    saveQuestions(subjects);
    sendJson(res, 201, { ok: true, question, subjects });
  } catch (error) {
    sendJson(res, 400, { error: error.message || "Não foi possível criar a questão." });
  }
}

async function handleQuestionUpdate(req, res, subject, questionId) {
  try {
    const payload = await readJsonBody(req);
    const subjects = loadQuestions();
    const questions = Array.isArray(subjects[subject]) ? subjects[subject] : [];
    const index = questions.findIndex((question) => String(question.id) === String(questionId));
    if (index < 0) return sendJson(res, 404, { error: "Questão não encontrada." });
    const question = normalizeManagedQuestion(subject, { ...questions[index], ...(payload.question || payload), id: questions[index].id }, questions[index]);
    questions[index] = question;
    subjects[subject] = questions;
    saveQuestions(subjects);
    sendJson(res, 200, { ok: true, question, subjects });
  } catch (error) {
    sendJson(res, 400, { error: error.message || "Não foi possível atualizar a questão." });
  }
}

async function handleQuestionDelete(_req, res, subject, questionId) {
  if (Number(questionId) <= 10) {
    return sendJson(res, 409, { error: "Os slots adaptativos de 1 a 10 não podem ser excluídos. Edite ou substitua a questão por importação." });
  }
  const subjects = loadQuestions();
  const questions = Array.isArray(subjects[subject]) ? subjects[subject] : [];
  const next = questions.filter((question) => String(question.id) !== String(questionId));
  if (next.length === questions.length) return sendJson(res, 404, { error: "Questão não encontrada." });
  subjects[subject] = next;
  saveQuestions(subjects);
  sendJson(res, 200, { ok: true, id: questionId, subjects });
}

async function handleQuestionImport(req, res) {
  try {
    const payload = await readJsonBody(req);
    const mode = payload.mode === "replace" ? "replace" : "merge";
    const incoming = payload.subjects && typeof payload.subjects === "object" ? payload.subjects : {};
    const subjects = mode === "replace" ? {} : loadQuestions();
    Object.entries(incoming).forEach(([rawSubject, rawQuestions]) => {
      const subject = normalizeLookup(rawSubject).replace(/\s+/g, "_");
      const existing = mode === "replace" ? [] : (subjects[subject] || []);
      const byId = new Map(existing.map((question) => [String(question.id), question]));
      (Array.isArray(rawQuestions) ? rawQuestions : []).forEach((source) => {
        const prior = byId.get(String(source.id)) || null;
        const question = normalizeManagedQuestion(subject, source, prior);
        byId.set(String(question.id), question);
      });
      subjects[subject] = [...byId.values()].sort((a, b) => Number(a.id) - Number(b.id));
    });
    saveQuestions(subjects);
    sendJson(res, 200, { ok: true, subjects });
  } catch (error) {
    sendJson(res, 400, { error: error.message || "Não foi possível importar as questões." });
  }
}

async function saveJourney(record) {
  saveJourneyLocal(record);
  if (hasSupabase()) {
    try {
      await saveJourneyToSupabase(record);
    } catch (supabaseError) {
      console.warn("Não foi possível salvar jornada no Supabase; jornada local preservada:", supabaseError.message);
    }
  }
}

const lessonBlockSchema = {
  type: "object",
  additionalProperties: false,
  required: ["heading", "body"],
  properties: {
    heading: { type: "string" },
    body: { type: "string" },
  },
};

const comparisonRowSchema = {
  type: "object",
  additionalProperties: false,
  required: ["concept", "focus", "example"],
  properties: {
    concept: { type: "string" },
    focus: { type: "string" },
    example: { type: "string" },
  },
};

const practiceQuestionSchema = {
  type: "object",
  additionalProperties: false,
  required: ["prompt", "options", "answer", "hint", "successFeedback", "errorFeedback", "explanation"],
  properties: {
    prompt: { type: "string" },
    options: { type: "array", minItems: 4, maxItems: 4, items: { type: "string" } },
    answer: { type: "string" },
    hint: { type: "string" },
    successFeedback: { type: "string" },
    errorFeedback: { type: "string" },
    explanation: { type: "string" },
  },
};

const practiceSchema = {
  type: "object",
  additionalProperties: false,
  required: ["title", "instructions", "passingScore", "questions"],
  properties: {
    title: { type: "string" },
    instructions: { type: "string" },
    passingScore: { type: "integer" },
    questions: { type: "array", minItems: 5, maxItems: 5, items: practiceQuestionSchema },
  },
};

const lessonSchema = {
  type: "object",
  additionalProperties: false,
  required: ["title", "objective", "estimatedMinutes", "contentBlocks", "comparisonTable", "confusionGuide", "quickSummary", "practice"],
  properties: {
    title: { type: "string" },
    objective: { type: "string" },
    estimatedMinutes: { type: "string" },
    contentBlocks: { type: "array", minItems: 3, maxItems: 6, items: lessonBlockSchema },
    comparisonTable: { type: "array", minItems: 2, maxItems: 5, items: comparisonRowSchema },
    confusionGuide: { type: "array", minItems: 2, maxItems: 5, items: { type: "string" } },
    quickSummary: { type: "string" },
    practice: practiceSchema,
  },
};

const journeySchema = {
  type: "object",
  additionalProperties: false,
  required: ["title", "summary", "estimatedDuration", "diagnosticFocus", "approvalCriteria", "lessons", "teacherGuidance"],
  properties: {
    title: { type: "string" },
    summary: { type: "string" },
    estimatedDuration: { type: "string" },
    diagnosticFocus: {
      type: "object",
      additionalProperties: false,
      required: ["subject", "skill", "cognitiveDifficulty", "level"],
      properties: {
        subject: { type: "string" },
        skill: { type: "string" },
        cognitiveDifficulty: { type: "string" },
        level: { type: "string" },
      },
    },
    approvalCriteria: { type: "string" },
    lessons: { type: "array", minItems: 2, maxItems: 7, items: lessonSchema },
    teacherGuidance: { type: "array", minItems: 3, maxItems: 6, items: { type: "string" } },
  },
};

function normalizePdfText(text = "") {
  return String(text)
    .replace(/\r/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, PDF_TEXT_LIMIT);
}

async function extractPdfText(pdfPart) {
  try {
    const pdfParseModule = require("pdf-parse");
    const pdfParse = pdfParseModule.default || pdfParseModule;
    const parsed = await pdfParse(pdfPart.data);
    return normalizePdfText(parsed.text || "");
  } catch (error) {
    console.warn("Não foi possível extrair texto do PDF:", error.message);
    return "";
  }
}

function buildPrompt(metadata, pdfText = "") {
  const lessonCount = metadata.duration === "curta" ? 3 : metadata.duration === "intensiva" ? 7 : 5;
  return [
    "Você é um designer instrucional sênior criando uma trilha de reforço escolar para ser aprovada por professores exigentes. O formato deve lembrar uma página de aula bem escrita: texto didático contínuo, subtítulos claros, exemplos concretos, tabela-resumo, seção 'como não confundir' e prática com feedback.",
    "",
    "Objetivo do produto:",
    "- Transformar o PDF do professor em uma jornada de aprendizagem pronta para o aluno usar.",
    "- Cada aula precisa ensinar antes de cobrar.",
    "- A experiência deve parecer produto final, não relatório, plano de aula ou rascunho.",
    "",
    "Regras obrigatórias de qualidade:",
    "- Responda em português do Brasil.",
    "- Gere exatamente " + lessonCount + " aulas no campo lessons.",
    "- Cada aula deve ter 4 a 6 contentBlocks com heading específico e body bem explicado.",
    "- Proibido usar headings genéricos como 'Conteúdo' sem explicar algo útil.",
    "- Proibido usar hífen, vazio ou placeholder em body, comparisonTable, confusionGuide, quickSummary, opções, dicas ou explicações.",
    "- Cada body deve ter 4 a 7 frases didáticas, como texto de aula. Explique o conceito, dê contexto, mostre pistas de resolução e inclua exemplo concreto quando couber.",
    "- Cada aula deve seguir esta lógica: introdução do conceito -> explicação passo a passo -> exemplo resolvido -> tabela ou resumo -> como não confundir -> prática.",
    "- A comparisonTable deve comparar conceitos reais, com exemplos completos.",
    "- A seção confusionGuide deve funcionar como um parágrafo de orientação, com frases completas sobre as confusões mais prováveis do aluno.",
    "- Cada prática deve ter exatamente 5 questões de múltipla escolha e passingScore igual a 4.",
    "- Cada questão precisa ter 4 alternativas completas, não siglas. Não use VA, VPA, VR, A/B/C/D como texto da alternativa.",
    "- A resposta correta deve ser o texto exato de uma das alternativas.",
    "- Cada questão precisa ter dica, feedback de acerto, feedback de erro e explicação específica.",
    "- Varie os tipos de questão: identificar, transformar, escolher justificativa, corrigir erro e aplicar em contexto.",
    "- Não mostre gabarito no enunciado.",
    "- Use exemplos concretos do PDF quando houver. Se precisar criar exemplos, mantenha-os alinhados ao material e ao nível do aluno.",
    "- A progressão das aulas deve ir do essencial ao aplicado: conceito -> reconhecimento -> comparação -> correção de erro -> aplicação.",
    "- Inclua approvalCriteria com critério claro, por exemplo: 'concluir todas as aulas e acertar pelo menos 4 de 5 questões em cada prática'.",
    "- A saída é para o professor visualizar agora e, depois, virar área do aluno.",
    "- Tom solicitado: " + metadata.tone + ".",
    "- Objetivo informado pelo professor: " + (metadata.objective || "não informado") + ".",
    "",
    "Diagnóstico do aluno:",
    JSON.stringify(metadata.student, null, 2),
    "",
    "Texto extraído do PDF:",
    pdfText || "Não foi possível extrair texto do PDF. Use o diagnóstico e o objetivo para criar uma trilha aplicável, e informe ao professor em teacherGuidance que o texto do PDF não pôde ser lido localmente.",
  ].join("\n");
}

function getJsonCandidate(rawText = "") {
  const text = String(rawText).trim();
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/i)?.[1];
  const candidate = fenced || text;
  const start = candidate.indexOf("{");
  const end = candidate.lastIndexOf("}");
  return start >= 0 && end > start ? candidate.slice(start, end + 1) : candidate;
}

function parseJourneyJson(rawText = "") {
  return JSON.parse(getJsonCandidate(rawText));
}

function saveInvalidJourneyResponse(rawText = "", error) {
  try {
    ensureStorage();
    const filename = "invalid-journey-" + Date.now() + ".txt";
    const body = [
      "Erro: " + (error?.message || "JSON inválido"),
      "",
      String(rawText || ""),
    ].join("\n");
    fs.writeFileSync(path.join(DATA_DIR, filename), body);
    return filename;
  } catch {
    return "";
  }
}

async function generateJourneyWithOpenAI(pdfPart, metadata, pdfText = "") {
  if (!OPENAI_API_KEY) {
    const error = new Error("OPENAI_API_KEY não configurada no servidor.");
    error.statusCode = 500;
    throw error;
  }

  const prompt = buildPrompt(metadata, pdfText);
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      authorization: "Bearer " + OPENAI_API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      input: [
        {
          role: "user",
          content: [
            { type: "input_text", text: prompt },
            {
              type: "input_file",
              filename: safeFilename(pdfPart.filename),
              file_data: "data:application/pdf;base64," + pdfPart.data.toString("base64"),
            },
          ],
        },
      ],
      text: {
        format: {
          type: "json_schema",
          name: "learning_journey",
          strict: true,
          schema: journeySchema,
        },
      },
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data.error?.message || "OpenAI retornou HTTP " + response.status + ".";
    const error = new Error(message);
    error.statusCode = response.status;
    throw error;
  }

  const outputText = data.output_text || data.output?.flatMap((item) => item.content || []).find((content) => content.type === "output_text")?.text;
  if (!outputText) throw new Error("A resposta da IA não trouxe texto estruturado.");

  try {
    return parseJourneyJson(outputText);
  } catch (error) {
    error.message = "A IA retornou JSON inválido: " + error.message;
    throw error;
  }
}

async function requestOllamaJson(prompt, options = {}) {
  const response = await fetch(OLLAMA_URL + "/api/generate", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      model: OLLAMA_MODEL,
      prompt,
      stream: true,
      format: options.format || journeySchema,
      options: {
        temperature: options.temperature ?? 0.18,
        num_ctx: 32768,
        num_predict: options.numPredict || OLLAMA_NUM_PREDICT,
      },
    }),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    const error = new Error(data.error || "Ollama retornou HTTP " + response.status + ".");
    error.statusCode = response.status;
    throw error;
  }

  let outputText = "";
  let buffered = "";
  const decoder = new TextDecoder();

  for await (const chunk of response.body) {
    buffered += decoder.decode(chunk, { stream: true });
    const lines = buffered.split("\n");
    buffered = lines.pop() || "";

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      const event = JSON.parse(trimmed);
      if (event.error) throw new Error(event.error);
      if (event.response) outputText += event.response;
    }
  }

  buffered += decoder.decode();
  if (buffered.trim()) {
    const event = JSON.parse(buffered.trim());
    if (event.error) throw new Error(event.error);
    if (event.response) outputText += event.response;
  }

  if (!outputText) throw new Error("O Ollama não retornou uma jornada.");
  return outputText;
}

async function repairJourneyJsonWithOllama(rawText, originalError) {
  const candidate = getJsonCandidate(rawText).slice(0, 70000);
  const prompt = [
    "Corrija o JSON abaixo para que ele fique válido e siga exatamente o schema de uma jornada educacional.",
    "Não invente comentários, não use markdown e não explique nada.",
    "Mantenha o conteúdo pedagógico existente sempre que possível.",
    "Se algum item estiver incompleto por corte, complete com texto didático coerente.",
    "Responda somente com o objeto JSON válido.",
    "",
    "Erro encontrado pelo parser: " + (originalError?.message || "JSON inválido"),
    "",
    candidate,
  ].join("\n");
  const repaired = await requestOllamaJson(prompt, {
    format: journeySchema,
    temperature: 0.05,
    numPredict: OLLAMA_NUM_PREDICT,
  });
  return parseJourneyJson(repaired);
}

async function generateJourneyWithOllama(metadata, pdfText) {
  const prompt = [
    buildPrompt(metadata, String(pdfText || "").slice(0, OLLAMA_TEXT_LIMIT)),
    "",
    "Formato obrigatório:",
    "- Responda somente com JSON válido.",
    "- Não use markdown.",
    "- O JSON precisa seguir estes campos: title, summary, estimatedDuration, diagnosticFocus, approvalCriteria, lessons, teacherGuidance.",
    "- Cada lesson precisa conter: title, objective, estimatedMinutes, contentBlocks, comparisonTable, confusionGuide, quickSummary e practice.",
    "- Cada practice precisa conter exactly 5 questions e passingScore 4.",
    "- Cada question precisa conter: prompt, options, answer, hint, successFeedback, errorFeedback e explanation.",
    "- Feche todos os arrays e objetos. Não interrompa a resposta antes do último }.",
    "- Não use markdown; responda somente o objeto JSON.",
  ].join("\n");

  const outputText = await requestOllamaJson(prompt, {
    format: journeySchema,
    temperature: 0.18,
    numPredict: OLLAMA_NUM_PREDICT,
  });

  try {
    return parseJourneyJson(outputText);
  } catch (error) {
    const debugFile = saveInvalidJourneyResponse(outputText, error);
    console.warn("Ollama retornou JSON inválido; tentando reparo automático:", error.message, debugFile ? "(" + debugFile + ")" : "");
    try {
      return await repairJourneyJsonWithOllama(outputText, error);
    } catch (repairError) {
      repairError.message = "A IA local retornou JSON inválido mesmo após reparo automático: " + repairError.message + (debugFile ? " Raw salvo em data/" + debugFile + "." : "");
      throw repairError;
    }
  }
}


function cleanJourneyText(value, fallback = "") {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  if (!text || text === "-" || /^conte[uú]do$/i.test(text) || /^n\/?a$/i.test(text)) return fallback;
  return text;
}

function isWeakJourneyText(value) {
  const text = cleanJourneyText(value);
  return !text || text.length < 18 || text === "-";
}

function expandVoiceLabel(value) {
  const text = cleanJourneyText(value);
  const normalized = text.toUpperCase().replace(/[.\s-]/g, "");
  const labels = {
    VA: "Voz ativa",
    VPA: "Voz passiva analítica",
    VPS: "Voz passiva sintética",
    VR: "Voz reflexiva",
  };
  return labels[normalized] || text;
}

function getJourneySkill(metadata = {}) {
  const student = metadata.student || {};
  return cleanJourneyText(student.weakestSkill, "habilidade indicada no diagnóstico");
}

function defaultLessonBlocks(skill, index) {
  const intro = index === 0
    ? "Nesta aula, o primeiro passo é entender o que está sendo observado em " + skill + ". O aluno não deve começar tentando adivinhar a resposta; ele precisa localizar a pista principal do enunciado e explicar o que essa pista mostra. Quando essa leitura inicial fica clara, a escolha da alternativa deixa de parecer chute e passa a ser uma decisão justificada. Use uma frase simples, destaque o elemento mais importante e peça que o aluno diga com suas próprias palavras por que ele chegou à conclusão."
    : "Nesta etapa, o aluno aprofunda " + skill + " comparando situações parecidas. A dificuldade costuma aparecer quando duas respostas parecem possíveis, mas apenas uma respeita todas as pistas do enunciado. Por isso, a aula deve insistir em leitura cuidadosa, comparação e justificativa. O objetivo não é memorizar uma palavra solta, mas entender o funcionamento do conceito em exemplos variados.";
  return [
    {
      heading: "O que o aluno precisa entender",
      body: intro,
    },
    {
      heading: "Como resolver passo a passo",
      body: "Primeiro, leia o comando da questão e descubra exatamente o que ela pede. Depois, encontre no enunciado a informação que comprova a resposta. Em seguida, compare as alternativas uma por uma, eliminando as que não combinam com essa pista. Por fim, peça ao aluno que explique a resposta em uma frase curta, porque essa justificativa mostra se ele realmente entendeu o conteúdo.",
    },
    {
      heading: "Exemplo resolvido",
      body: "Use um exemplo curto ligado ao tema da aula e resolva em voz alta. Mostre qual palavra, relação ou trecho confirma a resposta correta. Se o aluno errar, não entregue o gabarito imediatamente; volte ao trecho do enunciado e pergunte qual alternativa conversa melhor com aquela pista. Esse movimento ensina o aluno a revisar o raciocínio, não apenas a trocar uma resposta por outra.",
    },
    {
      heading: "Erro comum",
      body: "O erro mais comum é responder pela aparência da alternativa ou por uma palavra conhecida. Às vezes a alternativa parece bonita, mas não responde ao comando da questão. Outra dificuldade é confundir conceitos parecidos quando o enunciado muda pouco. Para corrigir isso, o aluno deve sempre apontar a evidência que sustenta a resposta antes de marcar a alternativa.",
    },
  ];
}

function defaultComparison(skill) {
  return [
    {
      concept: "Estratégia segura",
      focus: "Localizar a pista do enunciado antes de responder",
      example: "O aluno explica por que a alternativa escolhida combina com a frase analisada.",
    },
    {
      concept: "Estratégia frágil",
      focus: "Responder por palavra solta ou por aparência",
      example: "O aluno escolhe uma opção sem conferir se ela responde ao comando da questão.",
    },
  ];
}

function normalizeJourneyOptions(options, answer) {
  const items = Array.isArray(options) ? options : [];
  const cleaned = items.map(expandVoiceLabel).filter((item) => cleanJourneyText(item));
  const base = cleaned.length >= 4 ? cleaned.slice(0, 4) : [
    "Identificar a pista do enunciado e justificar a resposta",
    "Escolher a alternativa pela palavra mais conhecida",
    "Ignorar o comando e responder pela primeira impressão",
    "Copiar uma frase do exemplo sem conferir o sentido",
  ];
  const expandedAnswer = expandVoiceLabel(answer);
  if (expandedAnswer && !base.some((item) => item.toLowerCase() === expandedAnswer.toLowerCase())) {
    base[0] = expandedAnswer;
  }
  return base;
}

function normalizeJourneyQuestion(question, skill, index) {
  const normalized = question && typeof question === "object" ? question : {};
  const options = normalizeJourneyOptions(normalized.options, normalized.answer);
  const answer = options.find((option) => option.toLowerCase() === expandVoiceLabel(normalized.answer).toLowerCase()) || options[0];
  const prompt = cleanJourneyText(
    normalized.prompt,
    "Resolva a situação " + (index + 1) + " usando a estratégia estudada em " + skill + "."
  );
  return {
    prompt,
    options,
    answer,
    hint: cleanJourneyText(normalized.hint, "Volte ao enunciado e procure a pista que comprova a resposta."),
    successFeedback: cleanJourneyText(normalized.successFeedback, "Certo. A resposta foi justificada pela pista central do enunciado."),
    errorFeedback: cleanJourneyText(normalized.errorFeedback, "Ainda não. Compare cada alternativa com a pista principal antes de escolher."),
    explanation: cleanJourneyText(normalized.explanation, "A alternativa correta responde ao comando da questão e mantém coerência com a pista analisada."),
  };
}

function normalizeJourneyLesson(lesson, metadata, index) {
  const skill = getJourneySkill(metadata);
  const normalized = lesson && typeof lesson === "object" ? lesson : {};
  let blocks = Array.isArray(normalized.contentBlocks) ? normalized.contentBlocks : [];
  blocks = blocks
    .map((block, blockIndex) => ({
      heading: cleanJourneyText(block?.heading, ["Ideia central", "Exemplo guiado", "Erro comum", "Aplicação"][blockIndex] || "Ponto importante"),
      body: cleanJourneyText(block?.body),
    }))
    .filter((block) => !isWeakJourneyText(block.body));
  if (blocks.length < 3) blocks = defaultLessonBlocks(skill, index);

  let comparison = Array.isArray(normalized.comparisonTable) ? normalized.comparisonTable : [];
  comparison = comparison
    .map((row) => ({
      concept: cleanJourneyText(row?.concept),
      focus: cleanJourneyText(row?.focus),
      example: cleanJourneyText(row?.example),
    }))
    .filter((row) => row.concept && row.focus && row.example);
  if (comparison.length < 2) comparison = defaultComparison(skill);

  let questions = Array.isArray(normalized.practice?.questions) ? normalized.practice.questions : [];
  questions = questions.slice(0, 5).map((question, qIndex) => normalizeJourneyQuestion(question, skill, qIndex));
  while (questions.length < 5) {
    questions.push(normalizeJourneyQuestion({}, skill, questions.length));
  }

  return {
    title: cleanJourneyText(normalized.title, "Aula " + (index + 1) + ": " + skill),
    objective: cleanJourneyText(normalized.objective, "Fortalecer " + skill + " com explicação curta, exemplo guiado e prática avaliativa."),
    estimatedMinutes: cleanJourneyText(normalized.estimatedMinutes, index === 0 ? "10 min" : "12 min"),
    contentBlocks: blocks,
    comparisonTable: comparison,
    confusionGuide: (Array.isArray(normalized.confusionGuide) ? normalized.confusionGuide : [])
      .map((item) => cleanJourneyText(item))
      .filter((item) => item && item.length > 24)
      .slice(0, 4),
    quickSummary: cleanJourneyText(normalized.quickSummary, "Resumo para guardar: antes de marcar a resposta, encontre a pista principal do enunciado, compare as alternativas com essa pista e justifique a escolha com uma frase simples. Se a justificativa não ficar clara, volte ao exemplo resolvido antes de tentar novamente."),
    practice: {
      title: cleanJourneyText(normalized.practice?.title, "Pratique o que aprendeu"),
      instructions: cleanJourneyText(normalized.practice?.instructions, "5 questões · acerte ao menos 4 para concluir a aula"),
      passingScore: Number(normalized.practice?.passingScore || 4),
      questions,
    },
  };
}

function normalizeGeneratedJourney(journey, metadata) {
  const raw = journey && typeof journey === "object" ? journey : {};
  const skill = getJourneySkill(metadata);
  const lessons = (Array.isArray(raw.lessons) ? raw.lessons : []).map((lesson, index) => normalizeJourneyLesson(lesson, metadata, index));
  const lessonCount = metadata.duration === "curta" ? 3 : metadata.duration === "intensiva" ? 7 : 5;
  while (lessons.length < lessonCount) lessons.push(normalizeJourneyLesson({}, metadata, lessons.length));
  return {
    title: cleanJourneyText(raw.title, "Trilha de reforço: " + skill),
    summary: cleanJourneyText(raw.summary, "Jornada curta para reforçar " + skill + " com explicações, exemplos guiados e prática com feedback."),
    estimatedDuration: cleanJourneyText(raw.estimatedDuration, lessonCount + " aulas"),
    diagnosticFocus: raw.diagnosticFocus && typeof raw.diagnosticFocus === "object" ? raw.diagnosticFocus : {
      subject: metadata.student?.subject || "Disciplina",
      skill,
      cognitiveDifficulty: metadata.student?.weakestCognitive || "compreensão",
      level: metadata.student?.level || "nível inicial",
    },
    approvalCriteria: cleanJourneyText(raw.approvalCriteria, "Concluir todas as aulas e acertar pelo menos 4 de 5 questões em cada prática."),
    lessons: lessons.slice(0, lessonCount),
    teacherGuidance: (Array.isArray(raw.teacherGuidance) ? raw.teacherGuidance : [])
      .map((item) => cleanJourneyText(item))
      .filter((item) => item && item.length > 20)
      .slice(0, 6),
  };
}


async function reviewJourneyAnswersWithOllama(journey, metadata) {
  const skill = getJourneySkill(metadata);
  const prompt = [
    "Você é um revisor pedagógico e deve revisar SOMENTE as questões, alternativas, gabaritos e feedbacks da jornada abaixo.",
    "Tarefa:",
    "- Verifique se cada pergunta tem uma única resposta correta.",
    "- Garanta que o campo answer seja exatamente igual ao texto de uma das opções.",
    "- Corrija gabaritos errados, alternativas ambíguas e feedbacks confusos.",
    "- Mantenha o conteúdo, títulos e estrutura da trilha o máximo possível.",
    "- Não remova aulas e não mude o número de questões.",
    "- Use português do Brasil.",
    "- Responda somente JSON válido no mesmo schema recebido.",
    "",
    "Foco diagnóstico: " + skill,
    "",
    JSON.stringify(journey),
  ].join("\n");

  const reviewedText = await requestOllamaJson(prompt, {
    format: journeySchema,
    temperature: 0.05,
    numPredict: OLLAMA_NUM_PREDICT,
  });
  return normalizeGeneratedJourney(parseJourneyJson(reviewedText), metadata);
}

function createLocalFallbackJourney(metadata, pdfText) {
  const student = metadata.student || {};
  const skill = student.weakestSkill && student.weakestSkill !== "-" ? student.weakestSkill : "habilidade indicada no diagnóstico";
  const subject = student.subject || "disciplina";
  const cognitive = student.weakestCognitive && student.weakestCognitive !== "-" ? student.weakestCognitive : "compreensão";
  const level = student.level || "nível inicial";
  const lessonCount = metadata.duration === "curta" ? 3 : metadata.duration === "intensiva" ? 7 : 5;
  const sourceHint = pdfText
    ? "Use os trechos extraídos do PDF para ajustar exemplos e vocabulário antes de aplicar."
    : "O texto do PDF não pôde ser lido localmente; revise o material e ajuste exemplos antes de aplicar.";

  return {
    title: "Trilha de reforço: " + skill,
    summary: "Sequência de aulas curtas para " + (student.studentName || "o aluno") + " aprender, comparar e praticar " + skill + " com meta de aprovação.",
    estimatedDuration: lessonCount + " aulas",
    diagnosticFocus: {
      subject,
      skill,
      cognitiveDifficulty: cognitive,
      level,
    },
    approvalCriteria: "Concluir todas as aulas e acertar pelo menos 4 de 5 questões em cada prática.",
    lessons: Array.from({ length: lessonCount }, (_, index) => ({
      title: "Aula " + (index + 1) + ": " + (index === 0 ? "Entenda " : index === 1 ? "Reconheça " : "Aplique ") + skill,
      objective: "Fortalecer " + skill + " com foco em " + cognitive + ".",
      estimatedMinutes: index < 2 ? "10 a 12 min" : "12 a 15 min",
      contentBlocks: [
        {
          heading: "Ideia principal",
          body: "Comece observando a pista central do conteúdo. Em " + skill + ", o aluno deve identificar o que a questão pede antes de escolher uma alternativa.",
        },
        {
          heading: "Exemplo guiado",
          body: "Mostre um exemplo simples, destaque a pista decisiva e peça que o aluno explique o raciocínio com as próprias palavras.",
        },
        {
          heading: "Erro comum",
          body: "O erro mais frequente é responder por aparência, sem conferir a relação entre as informações do enunciado.",
        },
      ],
      comparisonTable: [
        { concept: "Estratégia segura", focus: "Usar a pista do enunciado", example: "Localizar quem faz, recebe ou justifica a ação." },
        { concept: "Estratégia frágil", focus: "Chutar pela alternativa", example: "Escolher a resposta que parece mais completa." },
      ],
      confusionGuide: [
        "Se duas alternativas parecem corretas, peça que o aluno volte ao trecho que comprova a resposta.",
        "Separe leitura do enunciado e escolha da alternativa; a decisão vem depois da pista.",
        "Quando o erro for repetido, retome o exemplo guiado antes de avançar.",
      ],
      quickSummary: "Para acertar, o aluno precisa encontrar a pista, justificar a escolha e eliminar alternativas que não respondem ao comando.",
      practice: {
        title: "Pratique o que aprendeu",
        instructions: "5 questões · acerte ao menos 4 para concluir a aula",
        passingScore: 4,
        questions: Array.from({ length: 5 }, (_, qIndex) => ({
          prompt: "Questão " + (qIndex + 1) + ": qual é a melhor estratégia para resolver uma atividade sobre " + skill + "?",
          options: [
            "Identificar a pista do enunciado antes de responder",
            "Escolher a alternativa mais longa",
            "Responder pela primeira palavra da frase",
            "Ignorar o exemplo e ir direto ao gabarito",
          ],
          answer: "Identificar a pista do enunciado antes de responder",
          hint: "Procure o dado que justifica a resposta.",
          successFeedback: "Certo. A pista do enunciado orienta a escolha.",
          errorFeedback: "Ainda não. Volte ao enunciado e procure a pista que comprova a resposta.",
          explanation: "A estratégia segura é justificar a resposta com uma pista clara, não por aparência.",
        })),
      },
    })),
    teacherGuidance: [
      sourceHint,
      "Aplique cada aula em duas etapas: leitura curta e prática com meta de 4 acertos.",
      "Não revele o gabarito antes da tentativa; use a dica para destravar o raciocínio.",
      "Se o aluno fizer menos de 4 acertos, retome a seção 'como não confundir'.",
    ],
  };
}

function isQuotaOrAuthError(error) {
  const message = String(error?.message || "").toLowerCase();
  return error?.statusCode === 401 || error?.statusCode === 403 || error?.statusCode === 429 || message.includes("quota") || message.includes("billing") || message.includes("api key");
}

async function generateJourney(pdf, metadata) {
  const pdfText = await extractPdfText(pdf);
  const provider = AI_PROVIDER === "openai" || AI_PROVIDER === "ollama" || AI_PROVIDER === "offline" ? AI_PROVIDER : "auto";

  if (provider === "openai") {
    return { journey: await generateJourneyWithOpenAI(pdf, metadata, pdfText), provider: "openai", pdfTextExtracted: Boolean(pdfText) };
  }

  if (provider === "ollama") {
    return { journey: await generateJourneyWithOllama(metadata, pdfText), provider: "ollama", pdfTextExtracted: Boolean(pdfText) };
  }

  if (provider === "offline") {
    return { journey: createLocalFallbackJourney(metadata, pdfText), provider: "offline", pdfTextExtracted: Boolean(pdfText) };
  }

  if (OPENAI_API_KEY) {
    try {
      return { journey: await generateJourneyWithOpenAI(pdf, metadata, pdfText), provider: "openai", pdfTextExtracted: Boolean(pdfText) };
    } catch (error) {
      if (!isQuotaOrAuthError(error)) throw error;
      console.warn("OpenAI indisponível; tentando Ollama local:", error.message);
    }
  }

  try {
    return { journey: await generateJourneyWithOllama(metadata, pdfText), provider: "ollama", pdfTextExtracted: Boolean(pdfText) };
  } catch (error) {
    console.warn("Ollama indisponível; usando fallback local:", error.message);
    return { journey: createLocalFallbackJourney(metadata, pdfText), provider: "offline", pdfTextExtracted: Boolean(pdfText), warning: error.message };
  }
}

async function handleJourneyGeneration(req, res) {
  const contentType = req.headers["content-type"] || "";
  const boundary = contentType.match(/boundary=(.+)$/)?.[1];
  if (!boundary) return sendJson(res, 400, { error: "Requisição multipart inválida." });

  let uploadedFilePath = "";
  let uploadCommitted = false;
  try {
    const body = await readRequestBody(req);
    const parts = parseMultipart(body, boundary);
    const pdf = parts.pdf;
    if (!pdf?.data?.length) return sendJson(res, 400, { error: "Envie um PDF válido." });
    if (!safeFilename(pdf.filename).toLowerCase().endsWith(".pdf")) return sendJson(res, 400, { error: "O arquivo precisa ter extensão PDF." });
    if (!hasPdfSignature(pdf.data)) return sendJson(res, 400, { error: "O conteúdo enviado não é um PDF válido." });

    const student = JSON.parse(parts.student?.data?.toString("utf8") || "{}");
    const metadata = {
      student,
      objective: parts.objective?.data?.toString("utf8").trim() || "",
      duration: parts.duration?.data?.toString("utf8").trim() || "padrao",
      tone: parts.tone?.data?.toString("utf8").trim() || "acolhedor",
    };

    const id = crypto.randomUUID();
    ensureStorage();
    const filename = id + "-" + safeFilename(pdf.filename);
    uploadedFilePath = path.join(UPLOAD_DIR, filename);
    fs.writeFileSync(uploadedFilePath, pdf.data);

    const generated = await generateJourney(pdf, metadata);
    generated.journey = normalizeGeneratedJourney(generated.journey, metadata);
    let answerReviewStatus = generated.provider === "offline" ? "not_applicable" : "pending";
    if (generated.provider !== "offline") {
      try {
        generated.journey = await reviewJourneyAnswersWithOllama(generated.journey, metadata);
        answerReviewStatus = "reviewed";
      } catch (reviewError) {
        answerReviewStatus = "failed";
        console.warn("Revisão automática dos gabaritos falhou; enviando trilha normalizada:", reviewError.message);
      }
    }
    const record = {
      id,
      createdAt: new Date().toISOString(),
      pdfFile: filename,
      metadata,
      provider: generated.provider,
      answerReviewStatus,
      pdfTextExtracted: generated.pdfTextExtracted,
      journey: generated.journey,
    };
    await saveJourney(record);
    uploadCommitted = true;
    sendJson(res, 201, {
      id,
      journey: generated.journey,
      provider: generated.provider,
      answerReviewStatus,
      pdfTextExtracted: generated.pdfTextExtracted,
      warning: generated.warning,
    });
  } catch (error) {
    if (uploadedFilePath && !uploadCommitted) {
      try {
        fs.unlinkSync(uploadedFilePath);
      } catch (cleanupError) {
        if (cleanupError.code !== "ENOENT") {
          console.warn("Não foi possível remover o upload após a falha:", cleanupError.message);
        }
      }
    }
    const status = error.statusCode || 500;
    console.error("Journey generation failed:", error);
    sendJson(res, status, { error: error.message || "Falha ao gerar a jornada." });
  }
}

function serveStatic(req, res) {
  const rawPath = decodeURIComponent(new URL(req.url, "http://" + req.headers.host).pathname);
  const filePath = rawPath === "/" ? path.join(ROOT, "index.html") : path.join(ROOT, rawPath);
  const normalized = path.normalize(filePath);
  if (!normalized.startsWith(ROOT)) return sendText(res, 403, "Acesso negado.");

  fs.readFile(normalized, (error, data) => {
    if (error) return sendText(res, 404, "Arquivo não encontrado.");
    const ext = path.extname(normalized).toLowerCase();
    res.writeHead(200, { "content-type": MIME_TYPES[ext] || "application/octet-stream" });
    res.end(data);
  });
}

ensureStorage();
const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://" + req.headers.host);
  if (req.method === "GET" && url.pathname === "/api/health") {
    return sendJson(res, 200, {
      ok: true,
      provider: AI_PROVIDER,
      openaiModel: OPENAI_MODEL,
      ollamaModel: OLLAMA_MODEL,
      ollamaUrl: OLLAMA_URL,
      ollamaTextLimit: OLLAMA_TEXT_LIMIT,
      maxUploadBytes: MAX_UPLOAD_BYTES,
      ollamaNumPredict: OLLAMA_NUM_PREDICT,
      studentJourneyLimit: STUDENT_JOURNEY_LIMIT,
      storage: hasSupabase() ? "supabase" : "local",
      supabaseConfigured: hasSupabase(),
    });
  }
  if (req.method === "GET" && url.pathname === "/api/student/journeys") {
    getStudentJourneysPayload(url.searchParams)
      .then((payload) => sendJson(res, 200, payload))
      .catch((error) => sendJson(res, 500, { error: error.message || "Não foi possível carregar trilhas." }));
    return;
  }
  if (req.method === "POST" && url.pathname === "/api/student/progress") {
    return handleStudentProgress(req, res);
  }
  if (req.method === "POST" && url.pathname === "/api/journeys") {
    return handleJourneyGeneration(req, res);
  }
  if (req.method === "GET" && url.pathname === "/api/journeys/manage") {
    return handleManagedJourneysList(req, res);
  }
  const journeyManagementMatch = url.pathname.match(/^\/api\/journeys\/([a-zA-Z0-9-]+)$/);
  if (journeyManagementMatch && req.method === "PATCH") {
    return handleJourneyManagement(req, res, journeyManagementMatch[1]);
  }
  if (journeyManagementMatch && req.method === "DELETE") {
    return handleJourneyDelete(req, res, journeyManagementMatch[1]);
  }
  if (req.method === "GET" && url.pathname === "/api/questions") {
    return handleQuestionsList(req, res);
  }
  if (req.method === "POST" && url.pathname === "/api/questions") {
    return handleQuestionCreate(req, res);
  }
  if (req.method === "POST" && url.pathname === "/api/questions/import") {
    return handleQuestionImport(req, res);
  }
  const questionManagementMatch = url.pathname.match(/^\/api\/questions\/([^/]+)\/([^/]+)$/);
  if (questionManagementMatch && req.method === "PATCH") {
    return handleQuestionUpdate(req, res, decodeURIComponent(questionManagementMatch[1]), decodeURIComponent(questionManagementMatch[2]));
  }
  if (questionManagementMatch && req.method === "DELETE") {
    return handleQuestionDelete(req, res, decodeURIComponent(questionManagementMatch[1]), decodeURIComponent(questionManagementMatch[2]));
  }
  if (req.method === "GET") return serveStatic(req, res);
  sendText(res, 405, "Método não permitido.");
});

server.listen(PORT, () => {
  console.log("Smart Study rodando em http://localhost:" + PORT);
});
