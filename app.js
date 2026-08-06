const SCREENS = {
  login: document.getElementById("login-screen"),
  welcome: document.getElementById("welcome-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen"),
  studentArea: document.getElementById("student-area-screen"),
  teacherLogin: document.getElementById("teacher-login-screen"),
  dashboard: document.getElementById("dashboard-screen"),
};

const continueLoginButton = document.getElementById("continue-login");
const studentNameInput = document.getElementById("student-name");
const studentClassroomInput = document.getElementById("student-classroom");
const studentClassYearInput = document.getElementById("student-class-year");
const studentClassGroupInput = document.getElementById("student-class-group");
const studentShiftInput = document.getElementById("student-shift");
const loginHintEl = document.getElementById("login-hint");
const devSkipLoginButton = document.getElementById("dev-skip-login");
const startButton = document.getElementById("start-test");
const nextButton = document.getElementById("next-question");
const restartButton = document.getElementById("restart-test");
const missionsButton = document.getElementById("go-to-missions");
const sendButtonLabelEl = document.getElementById("send-button-label");
const sendButtonIconEl = document.getElementById("send-button-icon");
const backToStartButton = document.getElementById("back-to-start");
const quizBackButton = document.getElementById("quiz-back-button");
const openStudentAreaButton = document.getElementById("open-student-area");
const backFromStudentAreaButton = document.getElementById("back-from-student-area");
const studentAreaSubtitleEl = document.getElementById("student-area-subtitle");
const studentAreaProgressValueEl = document.getElementById("student-area-progress-value");
const studentAreaProgressCopyEl = document.getElementById("student-area-progress-copy");
const studentJourneyListEl = document.getElementById("student-journey-list");
const studentJourneyDetailEl = document.getElementById("student-journey-detail");
const studentAreaEmptyEl = document.getElementById("student-area-empty");
const openTeacherAccessButton = document.getElementById("open-teacher-access");
const teacherPasswordInput = document.getElementById("teacher-password");
const teacherErrorEl = document.getElementById("teacher-error");
const enterDashboardButton = document.getElementById("enter-dashboard");
const backFromTeacherLoginButton = document.getElementById("back-from-teacher-login");
const backFromDashboardButton = document.getElementById("back-from-dashboard");
const refreshDashboardButton = document.getElementById("refresh-dashboard");
const openQuestionBankButton = document.getElementById("open-question-bank");
const closeQuestionBankButton = document.getElementById("close-question-bank");
const questionBankModalEl = document.getElementById("question-bank-modal");
const newQuestionButton = document.getElementById("new-question");
const exportQuestionsButton = document.getElementById("export-questions");
const questionImportInput = document.getElementById("question-import-input");
const questionBankStatusEl = document.getElementById("question-bank-status");
const questionEditorEl = document.getElementById("question-editor");
const questionEditorOriginalIdInput = document.getElementById("question-editor-original-id");
const questionEditorTitleEl = document.getElementById("question-editor-title");
const questionEditorIdInput = document.getElementById("question-editor-id");
const questionEditorTypeInput = document.getElementById("question-editor-type");
const questionEditorDifficultyInput = document.getElementById("question-editor-difficulty");
const questionEditorCognitiveInput = document.getElementById("question-editor-cognitive");
const questionEditorSkillInput = document.getElementById("question-editor-skill");
const questionEditorTextInput = document.getElementById("question-editor-text");
const questionEditorOptionsEl = document.getElementById("question-editor-options");
const questionEditorAnswerWrapEl = document.getElementById("question-editor-answer-wrap");
const questionEditorAnswerInput = document.getElementById("question-editor-answer");
const cancelQuestionEditorButton = document.getElementById("cancel-question-editor");
const openJourneyManagerButton = document.getElementById("open-journey-manager");
const journeyManagerModalEl = document.getElementById("journey-manager-modal");
const closeJourneyManagerButton = document.getElementById("close-journey-manager");
const refreshJourneyManagerButton = document.getElementById("refresh-journey-manager");
const journeyManagerSearchInput = document.getElementById("journey-manager-search");
const journeyManagerShowArchivedInput = document.getElementById("journey-manager-show-archived");
const journeyManagerStatusEl = document.getElementById("journey-manager-status");
const journeyManagerListEl = document.getElementById("journey-manager-list");
const generateDashboardReportButton = document.getElementById("generate-dashboard-report");
const reportFilterModalEl = document.getElementById("report-filter-modal");
const closeReportFilterButton = document.getElementById("close-report-filter");
const cancelReportFilterButton = document.getElementById("cancel-report-filter");
const confirmDashboardReportButton = document.getElementById("confirm-dashboard-report");
const openJourneyGeneratorButton = document.getElementById("open-journey-generator");
const journeyGeneratorModalEl = document.getElementById("journey-generator-modal");
const closeJourneyGeneratorButton = document.getElementById("close-journey-generator");
const cancelJourneyGeneratorButton = document.getElementById("cancel-journey-generator");
const journeyGeneratorFormEl = document.getElementById("journey-generator-form");
const journeyPdfInput = document.getElementById("journey-pdf-input");
const journeyFileNameEl = document.getElementById("journey-file-name");
const journeyStudentNameEl = document.getElementById("journey-student-name");
const journeyStudentMetaEl = document.getElementById("journey-student-meta");
const journeyFocusSkillEl = document.getElementById("journey-focus-skill");
const journeyFocusCognitiveEl = document.getElementById("journey-focus-cognitive");
const journeyObjectiveInput = document.getElementById("journey-objective");
const journeyDurationInput = document.getElementById("journey-duration");
const journeyToneInput = document.getElementById("journey-tone");
const journeyStatusEl = document.getElementById("journey-generator-status");
const journeySubmitButton = document.getElementById("submit-journey-generator");
const journeyGeneratedOutputEl = document.getElementById("journey-generated-output");
const dashboardInterventionCopyEl = document.getElementById("dashboard-intervention-copy");
const reportClassroomOptionsEl = document.getElementById("report-classroom-options");
const reportShiftOptionsEl = document.getElementById("report-shift-options");
const reportSubjectOptionsEl = document.getElementById("report-subject-options");
const reportLevelOptionsEl = document.getElementById("report-level-options");
const reportWeakSkillOptionsEl = document.getElementById("report-weak-skill-options");
const reportWeakCognitiveOptionsEl = document.getElementById("report-weak-cognitive-options");
const reportStudentOptionsEl = document.getElementById("report-student-options");
const reportStudentSearchInput = document.getElementById("report-student-search");
const reportAccuracyFilter = document.getElementById("report-accuracy-filter");
const reportDateFromInput = document.getElementById("report-date-from");
const reportDateToInput = document.getElementById("report-date-to");
const reportRecordModeInput = document.getElementById("report-record-mode");
const reportIncludeTableInput = document.getElementById("report-include-table");
const reportIncludeDiscursivesInput = document.getElementById("report-include-discursives");
const reportFilterPreviewEl = document.getElementById("report-filter-preview");
const reportSelectVisibleStudentsButton = document.getElementById("report-select-visible-students");
const reportClearStudentsButton = document.getElementById("report-clear-students");
const reportUseDashboardFiltersButton = document.getElementById("report-use-dashboard-filters");
const dashboardStatusLabelEl = document.getElementById("dashboard-status-label");
const dashboardSearchInput = document.getElementById("dashboard-search");
const dashboardClassroomFilter = document.getElementById("dashboard-classroom-filter");
const dashboardShiftFilter = document.getElementById("dashboard-shift-filter");
const dashboardSubjectFilter = document.getElementById("dashboard-subject-filter");
const dashboardQuestionSubjectFilter = document.getElementById("dashboard-question-subject");
const dashboardQuestionListEl = document.getElementById("dashboard-question-list");
const dashboardTotalStudentsEl = document.getElementById("dashboard-total-students");
const dashboardTotalStudentsSubEl = document.getElementById("dashboard-total-students-sub");
const dashboardAverageLevelEl = document.getElementById("dashboard-average-level");
const dashboardAverageLevelSubEl = document.getElementById("dashboard-average-level-sub");
const dashboardAverageAccuracyEl = document.getElementById("dashboard-average-accuracy");
const dashboardAverageAccuracySubEl = document.getElementById("dashboard-average-accuracy-sub");
const dashboardMainAlertEl = document.getElementById("dashboard-main-alert");
const dashboardMainAlertSubEl = document.getElementById("dashboard-main-alert-sub");
const dashboardLevelChartEl = document.getElementById("dashboard-level-chart");
const dashboardRankingListEl = document.getElementById("dashboard-ranking-list");
const dashboardRankingCountEl = document.getElementById("dashboard-ranking-count");
const dashboardWeekStripEl = document.getElementById("dashboard-week-strip");
const dashboardStreakListEl = document.getElementById("dashboard-streak-list");
const dashboardStreakCountEl = document.getElementById("dashboard-streak-count");
const dashboardCognitiveListEl = document.getElementById("dashboard-cognitive-list");
const dashboardAlertsEl = document.getElementById("dashboard-alerts");
const dashboardTableBodyEl = document.getElementById("dashboard-table-body");
const dashboardDetailNameEl = document.getElementById("dashboard-detail-name");
const dashboardDetailMetaEl = document.getElementById("dashboard-detail-meta");
const dashboardDetailLevelEl = document.getElementById("dashboard-detail-level");
const dashboardDetailLevelSubEl = document.getElementById("dashboard-detail-level-sub");
const dashboardDetailStrongEl = document.getElementById("dashboard-detail-strong");
const dashboardDetailStrongSubEl = document.getElementById("dashboard-detail-strong-sub");
const dashboardDetailWeakEl = document.getElementById("dashboard-detail-weak");
const dashboardDetailWeakSubEl = document.getElementById("dashboard-detail-weak-sub");
const dashboardDetailDiscursiveSkillEl = document.getElementById("dashboard-detail-discursive-skill");
const dashboardDetailDiscursiveQuestionEl = document.getElementById("dashboard-detail-discursive-question");
const dashboardDetailDiscursiveCognitiveEl = document.getElementById("dashboard-detail-discursive-cognitive");
const dashboardDetailDiscursiveAnswerEl = document.getElementById("dashboard-detail-discursive-answer");
const dashboardNavItems = document.querySelectorAll(".dashboard-nav-item");
const studentGuideEl = document.getElementById("student-guide");
const teacherGuideEl = document.getElementById("teacher-guide");
const closeStudentGuideButton = document.getElementById("close-student-guide");
const closeTeacherGuideButton = document.getElementById("close-teacher-guide");

const questionTitleEl = document.getElementById("question-title");
const questionMetaEl = document.getElementById("question-meta");
const questionTextEl = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const questionCounterEl = document.getElementById("question-counter");
const progressFillEl = document.getElementById("progress-fill");
const progressBarEl = document.getElementById("progress-bar");
const feedbackBannerEl = document.getElementById("feedback-banner");

const xpDisplayEl = document.getElementById("xp-display");
const coinsDisplayEl = document.getElementById("coins-display");
const streakDisplayEl = document.getElementById("streak-display");

const resultLevelEl = document.getElementById("result-level");
const resultDiagnosisEl = document.getElementById("result-diagnosis");
const resultTextEl = document.getElementById("result-text");
const resultBadgeEl = document.getElementById("result-badge");
const skillsChipsEl = document.getElementById("skills-chips");
const resultXpEl = document.getElementById("result-xp");
const resultAccuracyEl = document.getElementById("result-accuracy");
const resultTrackEl = document.getElementById("result-track");
const resultNextStepsEl = document.getElementById("result-next-steps");
const resultCaptionEl = document.getElementById("result-caption");
const sendStatusEl = document.getElementById("send-status");
const resultStrongSkillEl = document.getElementById("result-strong-skill");
const resultWeakSkillEl = document.getElementById("result-weak-skill");
const resultStrongCognitiveEl = document.getElementById("result-strong-cognitive");
const resultWeakCognitiveEl = document.getElementById("result-weak-cognitive");
const subjectNameWelcomeEl = document.getElementById("subject-name-welcome");
const subjectNameResultEl = document.getElementById("subject-name-result");
const welcomeTypingEl = document.getElementById("welcome-typing");
const subjectSymbolWelcomeEl = document.getElementById("subject-symbol-welcome");
const subjectSymbolResultEl = document.getElementById("subject-symbol-result");
const subjectPills = document.querySelectorAll(".subject-pill");
const rootStyle = document.documentElement;
const TEACHER_PASSWORD = "admin123";

const SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycby6OoHEJQOL0goeAwOu1i65lHrgc81NneVfAcTKrthYNNzAfZ9T7di4Vg8LjlqqXPeP/exec";
const DASHBOARD_SHEET_URL = "https://opensheet.elk.sh/1Pq3YGwUz3G5RIRIlp6Y2tvO7bxKQFAdb2vAwmcsnavE/P%C3%A1gina1";
const JOURNEY_API_URL = "/api/journeys";
const STUDENT_JOURNEYS_API_URL = "/api/student/journeys";
const STUDENT_PROGRESS_API_URL = "/api/student/progress";
const QUESTION_BANK_API_URL = "/api/questions";
const JOURNEY_MANAGER_API_URL = "/api/journeys/manage";

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function fetchJsonWithRetry(url, options = {}, retryOptions = {}) {
  const attempts = Math.max(1, Number(retryOptions.attempts || 2));
  const timeoutMs = Math.max(1000, Number(retryOptions.timeoutMs || 12000));
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, { ...options, signal: controller.signal });
      const data = await response.json().catch(() => ({}));
      if (response.ok) return { response, data };

      const error = new Error(data.error || "Não foi possível carregar as trilhas.");
      error.status = response.status;
      throw error;
    } catch (error) {
      lastError = error;
      const shouldRetry = !error.status || error.status >= 500;
      if (!shouldRetry || attempt === attempts) break;
      retryOptions.onRetry?.(attempt, error);
      await wait(500 * attempt);
    } finally {
      clearTimeout(timeoutId);
    }
  }

  if (lastError?.status && lastError.status < 500) throw lastError;
  throw new Error("Não foi possível conectar ao servidor. Verifique se o Smart Study está aberto e tente novamente.");
}

const SUBJECT_THEMES = {
  matematica: { color: "#3b82f6", rgb: "59, 130, 246", deep: "#1e3a8a" },
  portugues: { color: "#ef4444", rgb: "239, 68, 68", deep: "#991b1b" },
  ciencias: { color: "#22c55e", rgb: "34, 197, 94", deep: "#166534" },
  historia: { color: "#8b5e3c", rgb: "139, 94, 60", deep: "#4a2c1d" },
  geografia: { color: "#f97316", rgb: "249, 115, 22", deep: "#9a3412" },
  japones: { color: "#dc2626", rgb: "220, 38, 38", deep: "#7f1d1d" },
};

const SUBJECT_DISPLAY_NAMES = {
  matematica: "Matemática",
  portugues: "Português",
  ciencias: "Ciências",
  historia: "História",
  geografia: "Geografia",
  japones: "Japonês",
};

const SUBJECT_SYMBOLS = {
  matematica: { icon: "Σ" },
  portugues: { icon: "Aa" },
  ciencias: { icon: "🧪" },
  historia: { icon: "⌛" },
  geografia: { icon: "🧭" },
  japones: { icon: "漢" },
};

const SUBJECT_QUESTION_SETS = {
  matematica: [
    {
      id: 1,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 3,
      nextIfPartial: 2,
      nextIfWrong: 2,
      basePoints: 5,
      text: "Uma função afim é dada por f(x) = 2x - 5. Qual é o valor de f(3)?",
      skill: "Função afim",
      options: [
        { label: "1", correct: true },
        { label: "3", correct: false },
        { label: "6", correct: false },
        { label: "11", correct: false },
      ],
    },
    {
      id: 2,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 4,
      nextIfPartial: 4,
      nextIfWrong: 6,
      basePoints: 5,
      text: "Em uma progressão aritmética, o primeiro termo é 4 e a razão é 3. Qual é o quinto termo?",
      skill: "Progressão aritmética",
      options: [
        { label: "12", correct: false },
        { label: "16", correct: true },
        { label: "19", correct: false },
        { label: "20", correct: false },
      ],
    },
    {
      id: 3,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 7,
      nextIfPartial: 4,
      nextIfWrong: 4,
      basePoints: 10,
      text: "Uma empresa cobra R$40 de taxa fixa mais R$8 por entrega. Se um cliente pagou R$104, quantas entregas foram feitas?",
      skill: "Modelagem por equação",
      options: [
        { label: "6", correct: false },
        { label: "8", correct: true },
        { label: "10", correct: false },
        { label: "13", correct: false },
      ],
    },
    {
      id: 4,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 5,
      nextIfPartial: 6,
      nextIfWrong: 6,
      basePoints: 10,
      text: "Um produto de R$250 teve aumento de 12%. Qual passou a ser o novo preço?",
      skill: "Porcentagem e variação",
      options: [
        { label: "R$262", correct: false },
        { label: "R$275", correct: false },
        { label: "R$280", correct: true },
        { label: "R$300", correct: false },
      ],
    },
    {
      id: 5,
      type: "dissertativa",
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: null,
      nextIfPartial: null,
      nextIfWrong: null,
      basePoints: 15,
      text: "Uma função quadrática tem raízes 2 e 6 e concavidade voltada para cima. Explique como identificar o ponto de mínimo no eixo x e qual é esse valor.",
      skill: "Função quadrática",
      placeholder: "Explique o raciocínio usando as raízes da função.",
      expectedKeywordGroups: [["media", "média", "meio"], ["2", "dois"], ["6", "seis"], ["4", "quatro"]],
      idealAnswer: "O x do vértice fica no ponto médio entre as raízes. A média de 2 e 6 é 4, então o mínimo ocorre em x = 4.",
    },
    {
      id: 6,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 8,
      nextIfPartial: 8,
      nextIfWrong: 8,
      basePoints: 5,
      text: "Em uma turma, 18 dos 30 alunos entregaram um trabalho. Qual porcentagem da turma entregou o trabalho?",
      skill: "Porcentagem",
      options: [
        { label: "40%", correct: false },
        { label: "50%", correct: false },
        { label: "60%", correct: true },
        { label: "70%", correct: false },
      ],
    },
    {
      id: 7,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 10,
      nextIfPartial: 8,
      nextIfWrong: 8,
      basePoints: 10,
      text: "Uma aplicação de R$1.000 rende juros simples de 2% ao mês. Qual será o montante após 5 meses?",
      skill: "Juros simples",
      options: [
        { label: "R$1.020", correct: false },
        { label: "R$1.100", correct: true },
        { label: "R$1.200", correct: false },
        { label: "R$1.500", correct: false },
      ],
    },
    {
      id: 8,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 10,
      nextIfPartial: 9,
      nextIfWrong: 9,
      basePoints: 10,
      text: "Em uma pesquisa com 200 pessoas, 120 preferem estudar à noite. Qual é a razão entre pessoas que preferem estudar à noite e o total pesquisado?",
      skill: "Razão e proporção",
      options: [
        { label: "2/5", correct: false },
        { label: "3/5", correct: true },
        { label: "5/3", correct: false },
        { label: "3/2", correct: false },
      ],
    },
    {
      id: 9,
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: 10,
      nextIfPartial: 10,
      nextIfWrong: 10,
      basePoints: 15,
      text: "Uma bola é lançada e sua altura, em metros, é dada por h(t) = -t² + 6t, em que t está em segundos. Em que instante ela atinge a altura máxima?",
      skill: "Função quadrática aplicada",
      options: [
        { label: "2 s", correct: false },
        { label: "3 s", correct: true },
        { label: "4 s", correct: false },
        { label: "6 s", correct: false },
      ],
    },
    {
      id: 10,
      type: "dissertativa",
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: null,
      nextIfPartial: null,
      nextIfWrong: null,
      basePoints: 15,
      text: "Um estudante precisa escolher entre dois planos de internet: Plano A cobra R$80 fixos; Plano B cobra R$50 fixos mais R$5 por dia de uso. Para 10 dias de uso, explique qual plano é mais vantajoso.",
      skill: "Comparação de funções",
      placeholder: "Compare os custos dos dois planos e justifique.",
      expectedKeywordGroups: [["80", "oitenta"], ["100", "cem"], ["plano a", "mais vantajoso", "menor", "barato"]],
      idealAnswer: "Para 10 dias, o Plano B custa 50 + 5 x 10 = 100 reais. O Plano A custa 80 reais, portanto o Plano A é mais vantajoso.",
    },
  ],
  portugues: [
    {
      id: 1,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 3,
      nextIfPartial: 2,
      nextIfWrong: 2,
      basePoints: 5,
      text: "Em um texto dissertativo-argumentativo, qual elemento apresenta de forma direta a posição defendida pelo autor?",
      skill: "Argumentação",
      options: [
        { label: "Tese", correct: true },
        { label: "Narrador", correct: false },
        { label: "Clímax", correct: false },
        { label: "Rima", correct: false },
      ],
    },
    {
      id: 2,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 4,
      nextIfPartial: 4,
      nextIfWrong: 6,
      basePoints: 5,
      text: "Qual alternativa apresenta um conectivo com valor de oposição?",
      skill: "Coesão textual",
      options: [
        { label: "portanto", correct: false },
        { label: "além disso", correct: false },
        { label: "contudo", correct: true },
        { label: "porque", correct: false },
      ],
    },
    {
      id: 3,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 7,
      nextIfPartial: 4,
      nextIfWrong: 4,
      basePoints: 10,
      text: "Leia: 'Embora a tecnologia facilite o acesso à informação, ela não substitui a leitura crítica.' A relação estabelecida pela palavra 'embora' é de:",
      skill: "Relações de sentido",
      options: [
        { label: "causa", correct: false },
        { label: "concessão", correct: true },
        { label: "conclusão", correct: false },
        { label: "adição", correct: false },
      ],
    },
    {
      id: 4,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 5,
      nextIfPartial: 6,
      nextIfWrong: 6,
      basePoints: 10,
      text: "Em uma redação sobre evasão escolar, qual argumento é mais consistente?",
      skill: "Argumentação e repertório",
      options: [
        { label: "A evasão existe porque muitos alunos simplesmente não querem estudar.", correct: false },
        { label: "A evasão pode estar relacionada a fatores sociais, econômicos e à falta de permanência escolar.", correct: true },
        { label: "A evasão não merece análise porque acontece em poucos lugares.", correct: false },
        { label: "A evasão é sempre causada apenas pelo uso de celular.", correct: false },
      ],
    },
    {
      id: 5,
      type: "dissertativa",
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: null,
      nextIfPartial: null,
      nextIfWrong: null,
      basePoints: 15,
      text: "Reescreva a tese 'A tecnologia é importante' tornando-a mais específica e argumentativa para uma redação do Ensino Médio.",
      skill: "Construção de tese",
      placeholder: "Escreva uma tese mais clara, com recorte e posicionamento.",
      expectedKeywordGroups: [["tecnologia", "digital"], ["educação", "sociedade", "aprendizagem", "informação"], ["deve", "precisa", "necessário", "importante", "contribui"]],
      idealAnswer: "O uso da tecnologia na educação pode ampliar o acesso à informação, mas precisa ser acompanhado de orientação crítica para contribuir de fato com a aprendizagem.",
    },
    {
      id: 6,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 8,
      nextIfPartial: 8,
      nextIfWrong: 8,
      basePoints: 5,
      text: "Na frase 'Os dados foram analisados pelos pesquisadores', há predominância de qual voz verbal?",
      skill: "Voz verbal",
      options: [
        { label: "Voz ativa", correct: false },
        { label: "Voz passiva", correct: true },
        { label: "Voz reflexiva", correct: false },
        { label: "Discurso direto", correct: false },
      ],
    },
    {
      id: 7,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 10,
      nextIfPartial: 8,
      nextIfWrong: 8,
      basePoints: 10,
      text: "Leia: 'A escola deve preparar para o mercado de trabalho; no entanto, também precisa formar cidadãos críticos.' O conectivo 'no entanto' indica:",
      skill: "Coesão argumentativa",
      options: [
        { label: "oposição entre ideias", correct: true },
        { label: "explicação de um exemplo", correct: false },
        { label: "consequência inevitável", correct: false },
        { label: "repetição da mesma ideia", correct: false },
      ],
    },
    {
      id: 8,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 10,
      nextIfPartial: 9,
      nextIfWrong: 9,
      basePoints: 10,
      text: "Em uma proposta de intervenção para redação, qual elemento indica quem executará a ação?",
      skill: "Proposta de intervenção",
      options: [
        { label: "Agente", correct: true },
        { label: "Tema", correct: false },
        { label: "Título", correct: false },
        { label: "Antítese", correct: false },
      ],
    },
    {
      id: 9,
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: 10,
      nextIfPartial: 10,
      nextIfWrong: 10,
      basePoints: 15,
      text: "Qual opção melhora a coesão da sequência: 'Muitos jovens acessam notícias pelas redes sociais. Eles nem sempre verificam as fontes.'?",
      skill: "Reescrita e coesão",
      options: [
        { label: "Muitos jovens acessam notícias pelas redes sociais, mas nem sempre verificam as fontes.", correct: true },
        { label: "Muitos jovens acessam notícias pelas redes sociais. Portanto, sempre verificam as fontes.", correct: false },
        { label: "Muitos jovens acessam notícias pelas redes sociais porque as fontes são todas confiáveis.", correct: false },
        { label: "Muitos jovens acessam notícias pelas redes sociais ou as fontes deixam de existir.", correct: false },
      ],
    },
    {
      id: 10,
      type: "dissertativa",
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: null,
      nextIfPartial: null,
      nextIfWrong: null,
      basePoints: 15,
      text: "Escreva uma proposta de intervenção para combater a desinformação nas redes sociais, indicando agente, ação e finalidade.",
      skill: "Proposta de intervenção",
      placeholder: "Inclua quem fará, o que será feito e com qual objetivo.",
      expectedKeywordGroups: [["governo", "escola", "mídia", "plataformas", "sociedade"], ["campanha", "educação", "fiscalização", "orientação"], ["desinformação", "fake news", "notícias falsas"]],
      idealAnswer: "Escolas e plataformas digitais devem promover campanhas de educação midiática para orientar os jovens a identificar desinformação e verificar fontes antes de compartilhar conteúdos.",
    },
  ],
  ciencias: [
    {
      id: 1,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 3,
      nextIfPartial: 2,
      nextIfWrong: 2,
      basePoints: 5,
      text: "Em Biologia, qual molécula armazena as informações hereditárias usadas na produção de proteínas?",
      skill: "Genética molecular",
      options: [
        { label: "DNA", correct: true },
        { label: "Glicose", correct: false },
        { label: "Água", correct: false },
        { label: "Lipídio", correct: false },
      ],
    },
    {
      id: 2,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 4,
      nextIfPartial: 4,
      nextIfWrong: 6,
      basePoints: 5,
      text: "A molécula ATP é frequentemente chamada de 'moeda energética' da célula porque está ligada principalmente ao:",
      skill: "Bioenergética celular",
      options: [
        { label: "armazenamento e transferência imediata de energia", correct: true },
        { label: "transporte de oxigênio no sangue", correct: false },
        { label: "controle da pressão atmosférica", correct: false },
        { label: "aumento da salinidade dos oceanos", correct: false },
      ],
    },
    {
      id: 3,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 7,
      nextIfPartial: 4,
      nextIfWrong: 4,
      basePoints: 10,
      text: "Após o excesso de fertilizantes chegar a uma lagoa, houve proliferação de algas e morte de peixes. Qual explicação é mais adequada?",
      skill: "Ecologia e impactos ambientais",
      options: [
        { label: "O excesso de nutrientes favorece algas e pode reduzir o oxigênio dissolvido.", correct: true },
        { label: "Os fertilizantes eliminam toda forma de vida microscópica imediatamente.", correct: false },
        { label: "A água deixa de ter moléculas de hidrogênio.", correct: false },
        { label: "A proliferação de algas aumenta sempre o oxigênio para os peixes.", correct: false },
      ],
    },
    {
      id: 4,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 5,
      nextIfPartial: 6,
      nextIfWrong: 6,
      basePoints: 10,
      text: "Em um cruzamento mendeliano entre dois indivíduos heterozigotos Aa x Aa, qual é a chance de nascer um descendente aa?",
      skill: "Genética mendeliana",
      options: [
        { label: "0%", correct: false },
        { label: "25%", correct: true },
        { label: "50%", correct: false },
        { label: "75%", correct: false },
      ],
    },
    {
      id: 5,
      type: "dissertativa",
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: null,
      nextIfPartial: null,
      nextIfWrong: null,
      basePoints: 15,
      text: "Explique por que o aumento de gases como CO2 e CH4 pode intensificar o aquecimento global.",
      skill: "Efeito estufa e clima",
      placeholder: "Relacione gases, retenção de calor e temperatura média do planeta.",
      expectedKeywordGroups: [["co2", "dioxido", "dióxido", "ch4", "metano"], ["calor", "radiação", "radiacao"], ["temperatura", "aquecimento", "efeito estufa"]],
      idealAnswer: "CO2 e CH4 intensificam o efeito estufa porque retêm parte da radiação/calor na atmosfera, elevando a temperatura média do planeta.",
    },
    {
      id: 6,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 8,
      nextIfPartial: 8,
      nextIfWrong: 8,
      basePoints: 5,
      text: "As enzimas atuam nas reações químicas dos seres vivos principalmente porque:",
      skill: "Bioquímica",
      options: [
        { label: "diminuem a energia de ativação das reações", correct: true },
        { label: "transformam todo substrato em DNA", correct: false },
        { label: "impedem qualquer reação metabólica", correct: false },
        { label: "substituem a necessidade de água no organismo", correct: false },
      ],
    },
    {
      id: 7,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 10,
      nextIfPartial: 8,
      nextIfWrong: 8,
      basePoints: 10,
      text: "Uma vacina prepara o organismo para responder mais rápido a um agente infeccioso. Isso ocorre porque ela estimula principalmente:",
      skill: "Imunologia",
      options: [
        { label: "a memória imunológica", correct: true },
        { label: "a destruição permanente dos ribossomos", correct: false },
        { label: "a produção de glicose no pulmão", correct: false },
        { label: "a redução de todos os anticorpos", correct: false },
      ],
    },
    {
      id: 8,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 10,
      nextIfPartial: 9,
      nextIfWrong: 9,
      basePoints: 10,
      text: "A chuva ácida pode ocorrer quando gases poluentes reagem com a água na atmosfera. Um efeito esperado é:",
      skill: "Química ambiental",
      options: [
        { label: "redução do pH da água da chuva", correct: true },
        { label: "aumento do pH para valores sempre maiores que 14", correct: false },
        { label: "eliminação completa da acidez dos solos", correct: false },
        { label: "formação obrigatória de água destilada pura", correct: false },
      ],
    },
    {
      id: 9,
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: 10,
      nextIfPartial: 10,
      nextIfWrong: 10,
      basePoints: 15,
      text: "O uso inadequado de antibióticos pode favorecer bactérias resistentes. Qual mecanismo evolutivo explica melhor esse processo?",
      skill: "Evolução e seleção natural",
      options: [
        { label: "Seleção natural de bactérias que já possuíam resistência", correct: true },
        { label: "Transformação de todas as bactérias em vírus", correct: false },
        { label: "Desaparecimento imediato de qualquer mutação", correct: false },
        { label: "Criação de resistência por vontade do organismo", correct: false },
      ],
    },
    {
      id: 10,
      type: "dissertativa",
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: null,
      nextIfPartial: null,
      nextIfWrong: null,
      basePoints: 15,
      text: "Explique por que a quantidade de energia diminui ao longo de uma cadeia alimentar.",
      skill: "Fluxo de energia",
      placeholder: "Use produtores, consumidores e perdas de energia na explicação.",
      expectedKeywordGroups: [["energia"], ["calor", "metabolismo", "perda", "perdas"], ["cadeia alimentar", "nível trófico", "nivel trofico", "consumidores"]],
      idealAnswer: "A energia diminui porque parte dela é usada no metabolismo e perdida na forma de calor em cada nível trófico da cadeia alimentar.",
    },
  ],
  historia: [
    {
      id: 1,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 3,
      nextIfPartial: 2,
      nextIfWrong: 2,
      basePoints: 5,
      text: "A Revolução Industrial transformou a produção ao substituir principalmente o trabalho artesanal por:",
      skill: "Revolução Industrial",
      options: [
        { label: "produção mecanizada em fábricas", correct: true },
        { label: "economia baseada apenas em escambo", correct: false },
        { label: "retorno ao feudalismo rural", correct: false },
        { label: "fim completo das cidades", correct: false },
      ],
    },
    {
      id: 2,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 4,
      nextIfPartial: 4,
      nextIfWrong: 6,
      basePoints: 5,
      text: "Durante a Guerra Fria, a ordem mundial foi marcada pela disputa entre quais duas superpotências?",
      skill: "Guerra Fria",
      options: [
        { label: "Estados Unidos e União Soviética", correct: true },
        { label: "Brasil e Argentina", correct: false },
        { label: "Portugal e Espanha", correct: false },
        { label: "China e Japão no século XV", correct: false },
      ],
    },
    {
      id: 3,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 7,
      nextIfPartial: 4,
      nextIfWrong: 4,
      basePoints: 10,
      text: "Um texto sobre o Estado Novo menciona censura à imprensa, propaganda oficial e concentração de poder no Executivo. Esses elementos indicam um regime:",
      skill: "Era Vargas",
      options: [
        { label: "autoritário", correct: true },
        { label: "anarquista", correct: false },
        { label: "feudal descentralizado", correct: false },
        { label: "sem controle estatal", correct: false },
      ],
    },
    {
      id: 4,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 5,
      nextIfPartial: 6,
      nextIfWrong: 6,
      basePoints: 10,
      text: "A Constituição brasileira de 1988 é chamada de 'Constituição Cidadã' porque ficou associada à:",
      skill: "Redemocratização brasileira",
      options: [
        { label: "ampliação de direitos após o regime militar", correct: true },
        { label: "volta oficial da monarquia", correct: false },
        { label: "proibição definitiva de eleições", correct: false },
        { label: "criação do sistema colonial português", correct: false },
      ],
    },
    {
      id: 5,
      type: "dissertativa",
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: null,
      nextIfPartial: null,
      nextIfWrong: null,
      basePoints: 15,
      text: "Explique como a crise de 1929 afetou a economia cafeeira brasileira e contribuiu para mudanças políticas no país.",
      skill: "Crise de 1929 e Era Vargas",
      placeholder: "Relacione queda das exportações, café e mudança política.",
      expectedKeywordGroups: [["café", "cafeeira"], ["exportações", "exportacoes", "preço", "precos", "queda"], ["vargas", "1930", "política", "politica"]],
      idealAnswer: "A crise de 1929 reduziu a demanda e os preços do café, enfraquecendo a oligarquia cafeeira e contribuindo para a Revolução de 1930 e a ascensão de Vargas.",
    },
    {
      id: 6,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 8,
      nextIfPartial: 8,
      nextIfWrong: 8,
      basePoints: 5,
      text: "O imperialismo europeu do século XIX esteve ligado principalmente à expansão sobre territórios da África e da Ásia para obter:",
      skill: "Imperialismo",
      options: [
        { label: "mercados consumidores, matérias-primas e áreas de influência", correct: true },
        { label: "isolamento total das economias europeias", correct: false },
        { label: "fim imediato da industrialização", correct: false },
        { label: "substituição de fábricas por aldeias medievais", correct: false },
      ],
    },
    {
      id: 7,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 10,
      nextIfPartial: 8,
      nextIfWrong: 8,
      basePoints: 10,
      text: "O Tratado de Versalhes impôs duras punições à Alemanha após a Primeira Guerra Mundial. Uma consequência histórica associada a isso foi:",
      skill: "Guerras Mundiais",
      options: [
        { label: "aumento de ressentimentos que favoreceram discursos nacionalistas radicais", correct: true },
        { label: "fim imediato de todos os conflitos europeus", correct: false },
        { label: "transformação da Alemanha em colônia brasileira", correct: false },
        { label: "abolição mundial dos Estados nacionais", correct: false },
      ],
    },
    {
      id: 8,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 10,
      nextIfPartial: 9,
      nextIfWrong: 9,
      basePoints: 10,
      text: "O movimento Diretas Já, nos anos 1980, defendia principalmente:",
      skill: "Redemocratização brasileira",
      options: [
        { label: "eleições diretas para presidente", correct: true },
        { label: "retorno do poder moderador", correct: false },
        { label: "ampliação do sistema escravista", correct: false },
        { label: "proibição de partidos políticos", correct: false },
      ],
    },
    {
      id: 9,
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: 10,
      nextIfPartial: 10,
      nextIfWrong: 10,
      basePoints: 15,
      text: "No pacto colonial, a colônia era orientada a fornecer produtos e consumir mercadorias da metrópole. Essa lógica favorecia principalmente:",
      skill: "Sistema colonial",
      options: [
        { label: "a acumulação econômica da metrópole", correct: true },
        { label: "a autonomia industrial plena da colônia", correct: false },
        { label: "o fim do comércio atlântico", correct: false },
        { label: "a igualdade política entre colônia e metrópole", correct: false },
      ],
    },
    {
      id: 10,
      type: "dissertativa",
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: null,
      nextIfPartial: null,
      nextIfWrong: null,
      basePoints: 15,
      text: "Explique por que a censura foi um instrumento importante para regimes autoritários, como o Estado Novo ou a Ditadura Militar.",
      skill: "Autoritarismo e democracia",
      placeholder: "Relacione censura, controle da informação e oposição política.",
      expectedKeywordGroups: [["censura"], ["informação", "informacao", "imprensa", "notícias", "noticias"], ["oposição", "oposicao", "crítica", "critica", "controle"]],
      idealAnswer: "A censura permitia controlar informações, limitar críticas e enfraquecer a oposição, ajudando regimes autoritários a manter poder político.",
    },
  ],
  geografia: [
    {
      id: 1,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 3,
      nextIfPartial: 2,
      nextIfWrong: 2,
      basePoints: 5,
      text: "A globalização é caracterizada principalmente pela intensificação dos fluxos de:",
      skill: "Globalização",
      options: [
        { label: "mercadorias, capitais, informações e pessoas", correct: true },
        { label: "apenas rochas sedimentares", correct: false },
        { label: "somente rios de planície", correct: false },
        { label: "estações climáticas sem influência humana", correct: false },
      ],
    },
    {
      id: 2,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 4,
      nextIfPartial: 4,
      nextIfWrong: 6,
      basePoints: 5,
      text: "Em cartografia, uma escala 1:50.000 indica que 1 cm no mapa corresponde, na realidade, a:",
      skill: "Cartografia e escala",
      options: [
        { label: "500 metros", correct: true },
        { label: "50 metros", correct: false },
        { label: "5 quilômetros", correct: false },
        { label: "50 quilômetros", correct: false },
      ],
    },
    {
      id: 3,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 7,
      nextIfPartial: 4,
      nextIfWrong: 4,
      basePoints: 10,
      text: "Um país apresenta queda nas taxas de natalidade e mortalidade, além de aumento da população idosa. Esse quadro indica avanço da:",
      skill: "Dinâmica demográfica",
      options: [
        { label: "transição demográfica", correct: true },
        { label: "laterização do solo", correct: false },
        { label: "deriva continental imediata", correct: false },
        { label: "desertificação urbana obrigatória", correct: false },
      ],
    },
    {
      id: 4,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 5,
      nextIfPartial: 6,
      nextIfWrong: 6,
      basePoints: 10,
      text: "Quando áreas centrais de uma cidade recebem investimentos, encarecem e expulsam moradores de menor renda, ocorre um processo chamado:",
      skill: "Urbanização",
      options: [
        { label: "gentrificação", correct: true },
        { label: "intemperismo físico", correct: false },
        { label: "rotação de culturas", correct: false },
        { label: "isostasia", correct: false },
      ],
    },
    {
      id: 5,
      type: "dissertativa",
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: null,
      nextIfPartial: null,
      nextIfWrong: null,
      basePoints: 15,
      text: "Explique uma consequência econômica e uma consequência ambiental da expansão do agronegócio sobre o Cerrado.",
      skill: "Agropecuária e impactos ambientais",
      placeholder: "Cite uma consequência econômica e uma ambiental.",
      expectedKeywordGroups: [["produção", "exportação", "exportacao", "emprego", "economia"], ["desmatamento", "biodiversidade", "água", "agua", "solo"], ["cerrado"]],
      idealAnswer: "A expansão pode aumentar produção e exportações, mas também causar desmatamento, perda de biodiversidade e pressão sobre água e solos do Cerrado.",
    },
    {
      id: 6,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 8,
      nextIfPartial: 8,
      nextIfWrong: 8,
      basePoints: 5,
      text: "A latitude influencia o clima porque áreas próximas à Linha do Equador tendem a receber:",
      skill: "Climatologia",
      options: [
        { label: "maior incidência de radiação solar ao longo do ano", correct: true },
        { label: "menos energia solar que os polos em todos os meses", correct: false },
        { label: "neve permanente obrigatória", correct: false },
        { label: "ausência total de temperatura", correct: false },
      ],
    },
    {
      id: 7,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 10,
      nextIfPartial: 8,
      nextIfWrong: 8,
      basePoints: 10,
      text: "Em períodos de seca prolongada, países muito dependentes de hidrelétricas podem enfrentar aumento do custo de energia. Isso ocorre porque:",
      skill: "Matriz energética",
      options: [
        { label: "a menor vazão dos rios reduz a geração hidrelétrica", correct: true },
        { label: "as usinas hidrelétricas funcionam sem água", correct: false },
        { label: "a chuva impede a transmissão de energia", correct: false },
        { label: "a seca aumenta automaticamente todos os reservatórios", correct: false },
      ],
    },
    {
      id: 8,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 10,
      nextIfPartial: 9,
      nextIfWrong: 9,
      basePoints: 10,
      text: "A instalação de empresas transnacionais em vários países mostra uma característica da economia global atual: a:",
      skill: "Globalização produtiva",
      options: [
        { label: "fragmentação internacional da produção", correct: true },
        { label: "proibição de comércio exterior", correct: false },
        { label: "eliminação completa dos transportes", correct: false },
        { label: "volta exclusiva à produção doméstica artesanal", correct: false },
      ],
    },
    {
      id: 9,
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: 10,
      nextIfPartial: 10,
      nextIfWrong: 10,
      basePoints: 15,
      text: "O aumento do nível do mar ameaça áreas costeiras densamente ocupadas. Qual relação explica melhor esse risco?",
      skill: "Mudanças climáticas",
      options: [
        { label: "aquecimento global, derretimento de geleiras e expansão térmica dos oceanos", correct: true },
        { label: "redução absoluta de toda água oceânica", correct: false },
        { label: "fim das marés e das correntes marítimas", correct: false },
        { label: "diminuição da temperatura média global em todos os lugares", correct: false },
      ],
    },
    {
      id: 10,
      type: "dissertativa",
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: null,
      nextIfPartial: null,
      nextIfWrong: null,
      basePoints: 15,
      text: "Explique como a segregação socioespacial aparece nas grandes cidades brasileiras.",
      skill: "Segregação socioespacial",
      placeholder: "Relacione renda, acesso a serviços e localização na cidade.",
      expectedKeywordGroups: [["renda", "desigualdade"], ["periferia", "centro", "bairro"], ["serviços", "servicos", "transporte", "infraestrutura"]],
      idealAnswer: "A segregação socioespacial aparece quando grupos de diferentes rendas ocupam áreas distintas, com periferias muitas vezes tendo menos infraestrutura, transporte e serviços.",
    },
  ],
  japones: [
    {
      id: 1,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 3,
      nextIfPartial: 2,
      nextIfWrong: 2,
      basePoints: 5,
      text: "Na frase 'Watashi wa gakusei desu', qual partícula marca o tema da frase?",
      skill: "Partículas básicas",
      options: [
        { label: "wa / は", correct: true },
        { label: "ka / か", correct: false },
        { label: "no / の", correct: false },
        { label: "to / と", correct: false },
      ],
    },
    {
      id: 2,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 4,
      nextIfPartial: 4,
      nextIfWrong: 6,
      basePoints: 5,
      text: "Em japonês, o katakana é usado com frequência para:",
      skill: "Sistemas de escrita",
      options: [
        { label: "palavras estrangeiras e empréstimos linguísticos", correct: true },
        { label: "substituir todos os kanji em textos formais", correct: false },
        { label: "marcar apenas verbos no passado", correct: false },
        { label: "indicar exclusivamente nomes de rios japoneses", correct: false },
      ],
    },
    {
      id: 3,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 7,
      nextIfPartial: 4,
      nextIfWrong: 4,
      basePoints: 10,
      text: "Na frase 'Tanaka-san wa sensei desu', qual interpretação está correta?",
      skill: "Leitura de frases simples",
      options: [
        { label: "Tanaka é professor(a).", correct: true },
        { label: "Tanaka está perguntando as horas.", correct: false },
        { label: "Tanaka comprou um livro ontem.", correct: false },
        { label: "Tanaka não existe na frase.", correct: false },
      ],
    },
    {
      id: 4,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 5,
      nextIfPartial: 6,
      nextIfWrong: 6,
      basePoints: 10,
      text: "Em 'Kore wa watashi no hon desu', a partícula 'no / の' indica principalmente:",
      skill: "Posse e relação nominal",
      options: [
        { label: "posse ou relação entre nomes", correct: true },
        { label: "negação obrigatória", correct: false },
        { label: "pergunta no final da frase", correct: false },
        { label: "verbo no imperativo", correct: false },
      ],
    },
    {
      id: 5,
      type: "dissertativa",
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: null,
      nextIfPartial: null,
      nextIfWrong: null,
      basePoints: 15,
      text: "Explique a diferença básica entre as partículas は (wa) e が (ga) em frases simples do japonês.",
      skill: "Partículas e foco da frase",
      placeholder: "Explique tema e foco/sujeito de forma simples.",
      expectedKeywordGroups: [["は", "wa", "tema", "assunto"], ["が", "ga", "sujeito", "foco"], ["frase", "informação", "informacao"]],
      idealAnswer: "De forma simples, は marca o tema ou assunto da frase, enquanto が destaca o sujeito ou a informação em foco.",
    },
    {
      id: 6,
      difficulty: "fácil",
      cognitiveLevel: "memoria",
      nextIfCorrect: 8,
      nextIfPartial: 8,
      nextIfWrong: 8,
      basePoints: 5,
      text: "A forma 'desu / です' é usada em muitas frases básicas do japonês para dar tom:",
      skill: "Registro e polidez",
      options: [
        { label: "polido", correct: true },
        { label: "sempre agressivo", correct: false },
        { label: "exclusivamente infantil", correct: false },
        { label: "obrigatoriamente poético", correct: false },
      ],
    },
    {
      id: 7,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 10,
      nextIfPartial: 8,
      nextIfWrong: 8,
      basePoints: 10,
      text: "A frase 'Ashita benkyou shimasu' indica uma ação que acontecerá amanhã. Qual tradução é mais adequada?",
      skill: "Verbos em contexto",
      options: [
        { label: "Estudarei amanhã.", correct: true },
        { label: "Estudei ontem.", correct: false },
        { label: "Não estudo nunca.", correct: false },
        { label: "O livro é vermelho.", correct: false },
      ],
    },
    {
      id: 8,
      difficulty: "médio",
      cognitiveLevel: "interpretacao",
      nextIfCorrect: 10,
      nextIfPartial: 9,
      nextIfWrong: 9,
      basePoints: 10,
      text: "Em japonês, a partícula 'ka / か' no final de uma frase geralmente indica:",
      skill: "Frases interrogativas",
      options: [
        { label: "pergunta", correct: true },
        { label: "posse", correct: false },
        { label: "plural obrigatório", correct: false },
        { label: "tempo passado", correct: false },
      ],
    },
    {
      id: 9,
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: 10,
      nextIfPartial: 10,
      nextIfWrong: 10,
      basePoints: 15,
      text: "A frase japonesa costuma seguir a ordem Sujeito/tema + complementos + verbo. Qual alternativa respeita melhor essa lógica?",
      skill: "Ordem frasal japonesa",
      options: [
        { label: "Watashi wa nihongo o benkyou shimasu.", correct: true },
        { label: "Benkyou watashi nihongo wa shimasu o.", correct: false },
        { label: "O nihongo shimasu watashi wa benkyou.", correct: false },
        { label: "Shimasu o wa watashi benkyou nihongo.", correct: false },
      ],
    },
    {
      id: 10,
      type: "dissertativa",
      difficulty: "difícil",
      cognitiveLevel: "raciocinio",
      nextIfCorrect: null,
      nextIfPartial: null,
      nextIfWrong: null,
      basePoints: 15,
      text: "Escreva uma apresentação simples em japonês romanizado dizendo seu nome e que você é estudante.",
      skill: "Produção de frase simples",
      placeholder: "Ex.: Watashi wa ... desu. Gakusei desu.",
      expectedKeywordGroups: [["watashi", "boku", "watakushi"], ["desu"], ["gakusei", "estudante"]],
      idealAnswer: "Watashi wa João desu. Gakusei desu.",
    },
  ],
};

let ACTIVE_QUESTION_SETS = SUBJECT_QUESTION_SETS;

function shuffleArray(items) {
  const cloned = [...items];
  for (let index = cloned.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [cloned[index], cloned[swapIndex]] = [cloned[swapIndex], cloned[index]];
  }
  return cloned;
}

function createQuestionLookups(questionSets) {
  return Object.fromEntries(
    Object.entries(questionSets).map(([subject, questions]) => [
      subject,
      Object.fromEntries(questions.map((question) => [question.id, question])),
    ])
  );
}

const QUESTION_VERSION_PLANS = [
  {
    id: "A",
    slots: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10 },
  },
  {
    id: "B",
    slots: { 1: 2, 2: 6, 3: 4, 4: 8, 5: 10, 6: 1, 7: 3, 8: 7, 9: 9, 10: 5 },
  },
  {
    id: "C",
    slots: { 1: 6, 2: 1, 3: 7, 4: 3, 5: 5, 6: 2, 7: 8, 8: 4, 9: 9, 10: 10 },
  },
];

function chooseQuestionVersionPlan() {
  return QUESTION_VERSION_PLANS[Math.floor(Math.random() * QUESTION_VERSION_PLANS.length)] || QUESTION_VERSION_PLANS[0];
}

function buildSessionQuestionSet(baseQuestions, versionPlan) {
  const baseById = Object.fromEntries(baseQuestions.map((question) => [question.id, question]));

  return [...baseQuestions]
    .sort((a, b) => a.id - b.id)
    .map((templateQuestion) => {
      const sourceId = versionPlan.slots[templateQuestion.id] || templateQuestion.id;
      const sourceQuestion = baseById[sourceId] || templateQuestion;
      const clonedOptions = Array.isArray(sourceQuestion.options)
        ? shuffleArray(sourceQuestion.options.map((option) => ({ ...option })))
        : undefined;

      return {
        ...sourceQuestion,
        id: templateQuestion.id,
        sourceQuestionId: sourceQuestion.id,
        questionVersion: versionPlan.id,
        nextIfCorrect: templateQuestion.nextIfCorrect,
        nextIfPartial: templateQuestion.nextIfPartial,
        nextIfWrong: templateQuestion.nextIfWrong,
        options: clonedOptions,
      };
    });
}

function createSessionQuestionSets() {
  const versions = {};
  const questionSets = Object.fromEntries(
    Object.entries(ACTIVE_QUESTION_SETS).map(([subject, questions]) => {
      const versionPlan = chooseQuestionVersionPlan();
      versions[subject] = versionPlan.id;
      return [subject, buildSessionQuestionSet(questions, versionPlan)];
    })
  );

  return { questionSets, versions };
}

const SESSION_QUESTION_BANK = createSessionQuestionSets();
let SESSION_QUESTION_SETS = SESSION_QUESTION_BANK.questionSets;
let SESSION_QUESTION_VERSIONS = SESSION_QUESTION_BANK.versions;
let SESSION_QUESTION_LOOKUPS = createQuestionLookups(SESSION_QUESTION_SETS);

const ADAPTIVE_SUBJECTS = new Set(["matematica", "portugues", "ciencias", "historia", "geografia", "japones"]);
const MAX_QUESTIONS_PER_SUBJECT = 6;

let state = {
  subject: "matematica",
  currentIndex: 0,
  currentQuestionId: 1,
  questionVersion: SESSION_QUESTION_VERSIONS.matematica || "A",
  selectedOptionIndex: null,
  textAnswer: "",
  xp: 0,
  coins: 0,
  streak: 0,
  correctCount: 0,
  partialCount: 0,
  answers: [],
  startTime: null,
  studentName: "",
  studentClassroom: "",
  studentShift: "",
  resultSubmitted: false,
  lastResult: null,
  dashboardRows: [],
  dashboardSelectedRow: null,
  lastGeneratedJourney: null,
  studentJourneys: [],
  studentJourneyContext: null,
  studentJourneyDeckPositions: {},
};

function getQuestions() {
  return SESSION_QUESTION_SETS[state.subject] || ACTIVE_QUESTION_SETS[state.subject] || [];
}

function getCurrentQuestionVersion(subject = state.subject) {
  return SESSION_QUESTION_VERSIONS[subject] || "A";
}

function getCurrentQuestion() {
  if (ADAPTIVE_SUBJECTS.has(state.subject)) {
    return SESSION_QUESTION_LOOKUPS[state.subject]?.[state.currentQuestionId] || null;
  }
  return getQuestions()[state.currentIndex] || null;
}

function setGuideVisibility(guideEl, isVisible) {
  if (!guideEl) return;
  guideEl.hidden = !isVisible;
  guideEl.setAttribute("aria-hidden", isVisible ? "false" : "true");
}

function switchScreen(target) {
  Object.values(SCREENS).forEach((el) => el.classList.remove("active"));
  SCREENS[target].classList.add("active");
  document.querySelector(".app").classList.toggle("dashboard-mode", target === "dashboard");
  document.querySelector(".app").classList.toggle("student-area-mode", target === "studentArea");
  if (target !== "studentArea") state.studentJourneyContext = null;
  setGuideVisibility(studentGuideEl, target === "login");
  setGuideVisibility(teacherGuideEl, false);
}

let welcomeTypingTimer = null;

function normalizeClassroomNumberInput(input) {
  input.value = input.value.replace(/\D/g, "").slice(0, input.maxLength > 0 ? input.maxLength : undefined);
}

function updateLoginButtonState() {
  normalizeClassroomNumberInput(studentClassYearInput);
  normalizeClassroomNumberInput(studentClassGroupInput);
  const hasName = studentNameInput.value.trim().length > 0;
  const hasClassYear = studentClassYearInput.value.trim().length > 0;
  const hasClassGroup = studentClassGroupInput.value.trim().length > 0;
  const classroomValue = hasClassYear && hasClassGroup
    ? `${studentClassYearInput.value.trim()} ano ${studentClassGroupInput.value.trim()}`
    : "";
  studentClassroomInput.value = classroomValue;
  const hasClassroom = classroomValue.length > 0;
  const hasShift = studentShiftInput?.value.trim().length > 0;
  continueLoginButton.disabled = !(hasName && hasClassroom && hasShift);
  loginHintEl.style.display = continueLoginButton.disabled ? "" : "none";
}

function renderWelcomeTyping(name, animate = true) {
  if (welcomeTypingTimer) {
    clearTimeout(welcomeTypingTimer);
    welcomeTypingTimer = null;
  }

  const safeName = (name || "").trim();
  if (!safeName) {
    welcomeTypingEl.textContent = "";
    welcomeTypingEl.classList.remove("visible", "complete");
    return;
  }

  const message = `Bem-vindo, ${safeName}`;
  welcomeTypingEl.textContent = "";
  welcomeTypingEl.classList.add("visible");
  welcomeTypingEl.classList.remove("complete");

  if (!animate) {
    welcomeTypingEl.textContent = message;
    welcomeTypingEl.classList.add("complete");
    return;
  }

  let index = 0;
  const step = () => {
    index += 1;
    welcomeTypingEl.textContent = message.slice(0, index);
    if (index < message.length) {
      welcomeTypingTimer = setTimeout(step, 42);
    } else {
      welcomeTypingEl.classList.add("complete");
      welcomeTypingTimer = null;
    }
  };

  welcomeTypingTimer = setTimeout(step, 120);
}

function resetState() {
  const firstQuestionId = getQuestions()[0]?.id || null;
  state = {
    subject: state.subject,
    currentIndex: 0,
    currentQuestionId: firstQuestionId,
    questionVersion: getCurrentQuestionVersion(),
    selectedOptionIndex: null,
    textAnswer: "",
    xp: 0,
    coins: 0,
    streak: 0,
    correctCount: 0,
    partialCount: 0,
    answers: [],
    startTime: Date.now(),
    studentName: state.studentName,
    studentClassroom: state.studentClassroom,
    studentShift: state.studentShift,
    resultSubmitted: false,
    lastResult: null,
    dashboardRows: state.dashboardRows,
    dashboardSelectedRow: state.dashboardSelectedRow,
    lastGeneratedJourney: state.lastGeneratedJourney,
  };
  missionsButton.disabled = false;
  setSendButtonState("idle");
  setSendStatus("idle", "Pronto para envio.");
  updateHud();
}

function updateHud() {
  if (xpDisplayEl) xpDisplayEl.textContent = `${state.xp} XP`;
  if (coinsDisplayEl) coinsDisplayEl.textContent = `${state.coins} ◈`;
  if (streakDisplayEl) streakDisplayEl.textContent = `Combo: ${state.streak}x`;
}

function buildSheetPayload(resultData) {
  const latestDiscursiveAnswer = [...state.answers].reverse().find((answer) => answer.responseType === "dissertativa");
  const discursiveQuestion = latestDiscursiveAnswer
    ? SESSION_QUESTION_LOOKUPS[state.subject]?.[latestDiscursiveAnswer.questionId]
    : null;
  const accuracy = resultData.totalAnswered > 0
    ? Math.round((state.correctCount / resultData.totalAnswered) * 100)
    : 0;

  return {
    submittedAt: new Date().toISOString(),
    schemaVersion: "sheets-direct-v1",
    studentName: state.studentName,
    studentClassroom: state.studentClassroom,
    studentShift: state.studentShift,
    subject: SUBJECT_DISPLAY_NAMES[state.subject] || state.subject,
    testVersion: getCurrentQuestionVersion(),
    level: `Nível ${resultData.levelNumber} · ${resultData.levelLabel}`,
    levelNumber: String(resultData.levelNumber),
    levelLabel: resultData.levelLabel,
    track: resultData.track,
    xp: String(state.xp),
    coins: String(state.coins),
    streak: String(state.streak),
    correctCount: String(state.correctCount),
    partialCount: String(state.partialCount),
    wrongCount: String(resultData.wrongCount),
    totalAnswered: String(resultData.totalAnswered),
    accuracy: `${accuracy}%`,
    strongestSkill: resultData.strongestSkill || "-",
    weakestSkill: resultData.weakestSkill || "-",
    strongestCognitive: resultData.strongestCognitive || "-",
    weakestCognitive: resultData.weakestCognitive || "-",
    discursiveQuestion: discursiveQuestion?.text || "-",
    discursiveAnswer: latestDiscursiveAnswer?.responseText || "-",
    discursiveSkill: latestDiscursiveAnswer?.skill || "-",
    discursiveCognitive: latestDiscursiveAnswer ? describeCognitiveLevel(latestDiscursiveAnswer.cognitiveLevel) : "-",
    answersJson: JSON.stringify(state.answers),
  };
}

function buildSheetFormData(resultData) {
  const params = new URLSearchParams();
  Object.entries(buildSheetPayload(resultData)).forEach(([key, value]) => {
    params.set(key, value ?? "-");
  });
  return params;
}

function setSendStatus(status, message) {
  if (!sendStatusEl) return;
  sendStatusEl.classList.remove("sending", "forwarded", "error");
  if (status && status !== "idle") {
    sendStatusEl.classList.add(status);
  }
  sendStatusEl.textContent = message;
}

function setSendButtonState(status) {
  const states = {
    idle: ["Enviar resultado", "📤"],
    sending: ["Enviando para a planilha...", "⏳"],
    forwarded: ["Enviado para registro", "✓"],
    error: ["Tentar enviar novamente", "↻"],
  };
  const [label, icon] = states[status] || states.idle;
  sendButtonLabelEl.textContent = label;
  sendButtonIconEl.textContent = icon;
}

function renderFeedbackBanner(type, icon, message, meta) {
  feedbackBannerEl.className = `feedback-banner ${type}`;

  const messageWrap = document.createElement("span");
  if (icon) {
    const iconEl = document.createElement("span");
    iconEl.className = "feedback-icon";
    iconEl.setAttribute("aria-hidden", "true");
    iconEl.textContent = icon;
    messageWrap.appendChild(iconEl);
  }
  messageWrap.appendChild(document.createTextNode(message));

  if (meta) {
    const metaWrap = document.createElement("span");
    metaWrap.textContent = meta;
    feedbackBannerEl.replaceChildren(messageWrap, metaWrap);
  } else {
    feedbackBannerEl.replaceChildren(messageWrap);
  }
}

function submitHiddenSheetForm(formData) {
  const targetName = `sheet-target-${Date.now()}`;
  const iframe = document.createElement("iframe");
  iframe.name = targetName;
  iframe.style.display = "none";

  const form = document.createElement("form");
  form.action = SHEETS_WEB_APP_URL;
  form.method = "POST";
  form.target = targetName;
  form.style.display = "none";

  for (const [key, value] of formData.entries()) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = value;
    form.appendChild(input);
  }

  document.body.appendChild(iframe);
  document.body.appendChild(form);
  form.submit();

  setTimeout(() => {
    form.remove();
    iframe.remove();
  }, 1500);
}

async function submitResultToSheet(resultData) {
  if (state.resultSubmitted) {
    return { ok: false, reason: "already-submitted" };
  }
  if (!SHEETS_WEB_APP_URL) {
    return { ok: false, reason: "missing-url" };
  }

  try {
    const formData = buildSheetFormData(resultData);
    if (!formData.toString()) {
      return { ok: false, reason: "empty-payload" };
    }

    submitHiddenSheetForm(formData);
    state.resultSubmitted = true;
    return { ok: true, reason: "forwarded" };
  } catch (error) {
    console.error("Nao foi possivel enviar o resultado para a planilha.", error);
    return { ok: false, reason: "submit-error", error };
  }
}

function applySubjectTheme(subject) {
  const theme = SUBJECT_THEMES[subject] || SUBJECT_THEMES.matematica;
  rootStyle.style.setProperty("--subject-color", theme.color);
  rootStyle.style.setProperty("--subject-color-rgb", theme.rgb);
  rootStyle.style.setProperty("--subject-deep", theme.deep);
  rootStyle.style.setProperty("--button-glass-rgb", "34, 197, 94");
}

function updateSubjectDecoration(subject) {
  const symbol = SUBJECT_SYMBOLS[subject] || SUBJECT_SYMBOLS.matematica;
  subjectSymbolWelcomeEl.textContent = symbol.icon;
  subjectSymbolResultEl.textContent = symbol.icon;
}

function describeDifficulty(diff) {
  if (diff === "fácil") return "fácil · +5 pts";
  if (diff === "médio") return "médio · +10 pts";
  if (diff === "difícil") return "difícil · +15 pts";
  return diff;
}

function describeCognitiveLevel(level) {
  if (level === "memoria") return "memória";
  if (level === "interpretacao") return "interpretação";
  if (level === "raciocinio") return "raciocínio";
  return level;
}

function normalizeText(value) {
  return (value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function formatLabelList(labels) {
  if (!labels.length) return "";
  if (labels.length === 1) return labels[0];
  if (labels.length === 2) return `${labels[0]} e ${labels[1]}`;
  return `${labels.slice(0, -1).join(", ")} e ${labels[labels.length - 1]}`;
}

function renderQuestion() {
  const questions = getQuestions();
  const q = getCurrentQuestion();
  if (!q) return;
  state.selectedOptionIndex = null;
  state.textAnswer = "";
  nextButton.disabled = true;
  optionsContainer.replaceChildren();
  feedbackBannerEl.className = "feedback-banner";
  feedbackBannerEl.textContent = "";

  const answeredCount = state.answers.length;
  const total = ADAPTIVE_SUBJECTS.has(state.subject) ? MAX_QUESTIONS_PER_SUBJECT : questions.length;
  const currentDisplayIndex = ADAPTIVE_SUBJECTS.has(state.subject) ? answeredCount + 1 : state.currentIndex + 1;

  questionTitleEl.textContent = `Questão ${currentDisplayIndex}`;
  questionTextEl.textContent = q.text;

  if (q.type === "dissertativa") {
    const textarea = document.createElement("textarea");
    textarea.className = "discursive-answer";
    textarea.placeholder = q.placeholder || "Explique sua resposta.";
    textarea.setAttribute("aria-label", "Resposta dissertativa");

    const helper = document.createElement("div");
    helper.className = "discursive-helper";
    helper.textContent = "Explique o raciocínio em uma ou duas frases. Respostas mais completas ajudam no diagnóstico.";

    const minLength = 8;
    const warning = document.createElement("div");
    warning.className = "discursive-warning";

    const updateDiscursiveStatus = () => {
      const currentLength = textarea.value.trim().length;
      const remaining = Math.max(0, minLength - currentLength);
      state.textAnswer = textarea.value;
      nextButton.disabled = currentLength < minLength;
      if (remaining > 0) {
        warning.classList.remove("ready");
        warning.textContent = `Escreva pelo menos ${minLength} caracteres para liberar o envio. Faltam ${remaining}.`;
      } else {
        warning.classList.add("ready");
        warning.textContent = "Resposta com tamanho mínimo atingido. Agora você pode enviar.";
      }
    };

    textarea.addEventListener("input", updateDiscursiveStatus);
    updateDiscursiveStatus();

    optionsContainer.appendChild(textarea);
    optionsContainer.appendChild(helper);
    optionsContainer.appendChild(warning);
  } else {
    q.options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.setAttribute("aria-pressed", "false");

      const labelSpan = document.createElement("span");
      labelSpan.className = "option-label";
      labelSpan.textContent = opt.label;

      btn.appendChild(labelSpan);

      btn.addEventListener("click", () => {
        state.selectedOptionIndex = index;
        Array.from(optionsContainer.children).forEach((child) => {
          child.classList.remove("selected");
          child.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("selected");
        btn.setAttribute("aria-pressed", "true");
        nextButton.disabled = false;
      });

      optionsContainer.appendChild(btn);
    });
  }

  questionCounterEl.textContent = `${currentDisplayIndex} / ${total}`;
  const progressBase = ADAPTIVE_SUBJECTS.has(state.subject) ? answeredCount : state.currentIndex;
  const progress = Math.min(100, Math.round((progressBase / total) * 100));
  progressFillEl.style.width = `${progress}%`;
  progressBarEl.setAttribute("aria-valuenow", String(progress));
  progressBarEl.setAttribute("aria-valuetext", `${currentDisplayIndex} de ${total} questões`);
}

function evaluateDiscursiveAnswer(question, responseText) {
  const normalizedResponse = normalizeText(responseText);
  const groups = question.expectedKeywordGroups || [];
  const matchedGroups = groups.filter((group) =>
    group.some((keyword) => normalizedResponse.includes(normalizeText(keyword)))
  ).length;

  let scoreRatio = 0;
  if (groups.length > 0) {
    if (matchedGroups >= groups.length) scoreRatio = 1;
    else if (matchedGroups === groups.length - 1) scoreRatio = 0.7;
    else if (matchedGroups > 0) scoreRatio = 0.4;
  } else if (normalizedResponse.length >= 20) {
    scoreRatio = 0.4;
  }

  return {
    scoreRatio,
    correct: scoreRatio >= 0.7,
    partial: scoreRatio > 0 && scoreRatio < 1,
    matchedGroups,
    totalGroups: groups.length,
  };
}

function applyAnswer() {
  const q = getCurrentQuestion();
  if (!q) {
    return { applied: false, correct: false, partial: false, scoreRatio: 0 };
  }

  let correct = false;
  let partial = false;
  let scoreRatio = 0;
  let chosenIndex = state.selectedOptionIndex;
  let responseText = null;

  if (q.type === "dissertativa") {
    responseText = (state.textAnswer || "").trim();
    if (responseText.length < 8) return { applied: false, correct: false, partial: false, scoreRatio: 0 };
    const evaluation = evaluateDiscursiveAnswer(q, responseText);
    correct = evaluation.correct;
    partial = evaluation.partial;
    scoreRatio = evaluation.scoreRatio;
  } else {
    if (chosenIndex == null) return { applied: false, correct: false, partial: false, scoreRatio: 0 };
    const chosen = q.options[chosenIndex];
    correct = !!chosen.correct;
    scoreRatio = correct ? 1 : 0;
  }

  let gainedXp = 0;
  let gainedCoins = 0;

  if (scoreRatio >= 0.7) {
    state.correctCount += 1;
    state.streak += 1;

    gainedXp += Math.round(q.basePoints * scoreRatio);
    if (state.streak > 1) {
      const streakBonus = 0.1 * (state.streak - 1);
      gainedXp = Math.round(gainedXp * (1 + streakBonus));
    }

    if (q.difficulty === "difícil") {
      gainedXp += Math.round(3 * scoreRatio);
    }

    gainedCoins += Math.round(q.basePoints * scoreRatio);
  } else if (scoreRatio > 0) {
    state.partialCount += 1;
    state.streak = 0;
    gainedXp = Math.max(1, Math.round(q.basePoints * scoreRatio));
    gainedCoins += Math.max(1, Math.round(q.basePoints * scoreRatio * 0.8));
  } else {
    state.streak = 0;
    gainedXp = Math.round(q.basePoints * 0.2);
    gainedCoins += Math.round(q.basePoints * 0.3);
  }

  state.xp += gainedXp;
  state.coins += gainedCoins;

  state.answers.push({
    questionId: q.id,
    sourceQuestionId: q.sourceQuestionId || q.id,
    questionVersion: q.questionVersion || getCurrentQuestionVersion(),
    difficulty: q.difficulty,
    cognitiveLevel: q.cognitiveLevel,
    skill: q.skill,
    correct,
    partial,
    scoreRatio,
    gainedXp,
    gainedCoins,
    chosenIndex,
    responseType: q.type || "multipla_escolha",
    responseText,
  });

  updateHud();

  if (q.type !== "dissertativa") {
    const optionsButtons = Array.from(optionsContainer.children);
    optionsButtons.forEach((btn, index) => {
      const opt = q.options[index];
      btn.classList.remove("option-correct", "option-wrong");
      if (opt.correct) {
        btn.classList.add("option-correct");
      }
      if (!opt.correct && index === chosenIndex) {
        btn.classList.add("option-wrong");
      }
    });
  }

  if (correct) {
    renderFeedbackBanner("correct", "", "Resposta correta.", "");
  } else if (partial) {
    const percent = Math.round(scoreRatio * 100);
    renderFeedbackBanner("correct", "", `Resposta parcialmente correta (${percent}%).`, "");
  } else {
    const answerHint = q.type === "dissertativa" && q.idealAnswer
      ? ` Resposta esperada: ${q.idealAnswer}`
      : " Revise esta habilidade.";
    renderFeedbackBanner("wrong", "", `Resposta incorreta.${answerHint}`, "");
  }

  return { applied: true, correct, partial, scoreRatio };
}

function decideNextQuestion(question, answerResult) {
  if (!question) return null;
  if (!ADAPTIVE_SUBJECTS.has(state.subject)) {
    const questions = getQuestions();
    const nextIndex = state.currentIndex + 1;
    return nextIndex < questions.length ? questions[nextIndex].id : null;
  }

  const candidateId = answerResult.correct
    ? question.nextIfCorrect ?? null
    : answerResult.partial
      ? question.nextIfPartial ?? null
      : question.nextIfWrong ?? null;

  if (candidateId == null) return null;
  if (!SESSION_QUESTION_LOOKUPS[state.subject]?.[candidateId]) return null;
  if (candidateId === question.id) return null;
  if (state.answers.some((answer) => answer.questionId === candidateId)) return null;
  return candidateId;
}

function computeResult() {
  const answeredQuestions = state.answers
    .map((answer) => SESSION_QUESTION_LOOKUPS[state.subject]?.[answer.questionId])
    .filter(Boolean);
  const questions = answeredQuestions.length ? answeredQuestions : getQuestions();
  const allSubjectQuestions = getQuestions();
  const totalAnswered = state.answers.length || 1;
  const maxXp = allSubjectQuestions.reduce(
    (sum, q) => sum + q.basePoints + (q.difficulty === "difícil" ? 3 : 0),
    0
  );
  const scoreRaw = Math.min(state.xp, maxXp);
  const answeredPerformance = state.answers.reduce((sum, answer) => sum + answer.scoreRatio, 0);
  const scorePercent = totalAnswered > 0
    ? Math.round((answeredPerformance / totalAnswered) * 100)
    : 0;

  let levelNumber;
  let levelLabel;
  let levelHumanLabel;
  let levelSummary;
  let track;
  let nextSteps;

  if (scorePercent <= 30) {
    levelNumber = 1;
    levelLabel = "Iniciante";
    levelHumanLabel = "Você precisa reforçar o básico para avançar com mais segurança.";
    levelSummary = "Seu desempenho indica um nível inicial e necessidade de reforço estruturado.";
    track = "Reforço básico";
    nextSteps =
      "Começar revisando os fundamentos dessa disciplina, com exercícios guiados, exemplos visuais e correções passo a passo.";
  } else if (scorePercent <= 60) {
    levelNumber = 2;
    levelLabel = "Fundamental";
    levelHumanLabel = "Você já domina parte do conteúdo, mas ainda precisa evoluir em pontos essenciais.";
    levelSummary = "Seu desempenho indica um nível fundamental em consolidação.";
    track = "Consolidação de conteúdos principais";
    nextSteps =
      "Aprofundar nos conteúdos principais da disciplina, misturando revisão e novos desafios em um ritmo confortável.";
  } else if (scorePercent <= 85) {
    levelNumber = 3;
    levelLabel = "Intermediário";
    levelHumanLabel = "Você já mostra boa compreensão e está pronto para desafios maiores com acompanhamento.";
    levelSummary = "Seu desempenho indica um nível intermediário inicial.";
    track = "Desafios intermediários";
    nextSteps =
      "Explorar situações do dia a dia, problemas mais longos e questões que exigem conexão entre diferentes conteúdos.";
  } else {
    levelNumber = 4;
    levelLabel = "Avançado";
    levelHumanLabel = "Você demonstra domínio consistente e pode avançar para desafios mais complexos.";
    levelSummary = "Seu desempenho indica um nível avançado para seguir com desafios maiores.";
    track = "Desafios avançados e preparação";
    nextSteps =
      "Receber desafios complexos, revisões focadas para provas e atividades que aproximam a disciplina de temas atuais.";
  }

  const skillsMap = {};
  const cognitiveMap = {};
  state.answers.forEach((ans) => {
    if (!skillsMap[ans.skill]) {
      skillsMap[ans.skill] = { score: 0, total: 0 };
    }
    skillsMap[ans.skill].total += 1;
    skillsMap[ans.skill].score += ans.scoreRatio;

    if (!cognitiveMap[ans.cognitiveLevel]) {
      cognitiveMap[ans.cognitiveLevel] = { score: 0, total: 0 };
    }
    cognitiveMap[ans.cognitiveLevel].total += 1;
    cognitiveMap[ans.cognitiveLevel].score += ans.scoreRatio;
  });

  const skillEntries = Object.entries(skillsMap).map(([skill, data]) => ({
    skill,
    ratio: data.score / data.total,
  }));
  const strongestSkill = [...skillEntries].sort((a, b) => b.ratio - a.ratio)[0];
  const weakestSkill = [...skillEntries].sort((a, b) => a.ratio - b.ratio)[0];

  skillsChipsEl.replaceChildren();
  skillEntries.forEach(({ skill, ratio }) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    if (ratio >= 0.7) chip.classList.add("chip-strong");
    if (ratio <= 0.3) chip.classList.add("chip-weak");
    chip.textContent = `${skill}: ${Math.round(ratio * 100)}%`;
    skillsChipsEl.appendChild(chip);
  });

  const cognitiveEntries = Object.entries(cognitiveMap).map(([level, data]) => ({
    level,
    ratio: data.score / data.total,
  }));
  const strongestCognitive = [...cognitiveEntries].sort((a, b) => b.ratio - a.ratio)[0];
  const weakestCognitive = [...cognitiveEntries].sort((a, b) => a.ratio - b.ratio)[0];

  let skillDiagnosis = "Continue praticando para ampliar seu domínio das habilidades avaliadas.";
  if (strongestSkill && weakestSkill) {
    if (strongestSkill.skill === weakestSkill.skill) {
      skillDiagnosis = `Seu desempenho atual mostra mais segurança em ${strongestSkill.skill.toLowerCase()}.`;
    } else {
      skillDiagnosis = `Você domina ${strongestSkill.skill.toLowerCase()}, mas precisa reforçar ${weakestSkill.skill.toLowerCase()}.`;
    }
  }

  let cognitiveDiagnosis = "";
  if (strongestCognitive && weakestCognitive) {
    const strongestLabel = describeCognitiveLevel(strongestCognitive.level);
    const weakestLabel = describeCognitiveLevel(weakestCognitive.level);
    cognitiveDiagnosis = strongestLabel === weakestLabel
      ? ` Seu desempenho ficou mais estável nas questões de ${strongestLabel}.`
      : ` Seu melhor resultado apareceu em ${strongestLabel}, enquanto ${weakestLabel} ainda precisa de mais apoio.`;
  }

  const subjectName = SUBJECT_DISPLAY_NAMES[state.subject] || "Disciplina";
  const diagnosisTop = strongestSkill && weakestSkill
    ? strongestSkill.skill === weakestSkill.skill
      ? `🎯 Diagnóstico: Você apresenta mais segurança em ${strongestSkill.skill.toLowerCase()}.`
      : `🎯 Diagnóstico: Você já domina ${strongestSkill.skill.toLowerCase()}, mas precisa reforçar ${weakestSkill.skill.toLowerCase()}.`
    : "🎯 Diagnóstico: Continue praticando para consolidar as habilidades avaliadas.";
  const trailItems = [
    weakestSkill ? `reforçar ${weakestSkill.skill.toLowerCase()}` : "reforçar a habilidade com menor desempenho",
    levelNumber <= 2 ? "revisar conteúdos iniciais com apoio guiado" : "praticar interpretação em novos contextos",
    levelNumber >= 3 ? "resolver desafios progressivos com mais autonomia" : "praticar exercícios curtos com correção comentada",
  ];

  subjectNameResultEl.textContent = subjectName;
  updateSubjectDecoration(state.subject);
  resultLevelEl.textContent = `Nível ${levelNumber} · ${levelLabel} · ${levelHumanLabel}`;
  resultDiagnosisEl.textContent = diagnosisTop;
  resultTextEl.textContent = `${levelSummary} Sua trilha de ${subjectName} começa no Nível ${levelNumber} e prioriza os conteúdos mais importantes para a sua evolução. ${levelHumanLabel}`;

  resultStrongSkillEl.textContent = strongestSkill ? strongestSkill.skill : "-";
  resultWeakSkillEl.textContent = weakestSkill ? `⚠ ${weakestSkill.skill}` : "-";
  resultStrongCognitiveEl.textContent = strongestCognitive ? describeCognitiveLevel(strongestCognitive.level) : "-";
  resultWeakCognitiveEl.textContent = weakestCognitive ? describeCognitiveLevel(weakestCognitive.level) : "-";

  resultBadgeEl.textContent = "Nivelamento pronto";
  resultXpEl.textContent = `${state.xp} XP`;

  const accuracyPercent = Math.round((state.correctCount / totalAnswered) * 100);
  const wrongCount = totalAnswered - state.correctCount - state.partialCount;
  resultAccuracyEl.textContent = `Acertos: ${state.correctCount}/${totalAnswered} · Parciais: ${state.partialCount}/${totalAnswered} · Erros: ${wrongCount}/${totalAnswered}`;
  resultTrackEl.textContent = track;
  const nextStepsTitle = document.createTextNode("Você precisa:");
  const nextStepNodes = trailItems.map((item) => {
    const line = document.createElement("span");
    line.className = "trail-line";
    line.textContent = `• ${item}`;
    return line;
  });
  const accuracyLine = document.createElement("span");
  accuracyLine.className = "trail-line";
  accuracyLine.textContent = `• aproveitamento atual: ${accuracyPercent}% em ${totalAnswered} questão(ões) respondida(s)`;
  resultNextStepsEl.replaceChildren(nextStepsTitle, ...nextStepNodes, accuracyLine);
  resultCaptionEl.textContent = "Resultado baseado em desempenho por habilidade e nível cognitivo.";

  state.lastResult = {
    levelNumber,
    levelLabel,
    track,
    scorePercent,
    accuracyPercent,
    totalAnswered,
    wrongCount,
    strongestSkill: strongestSkill ? strongestSkill.skill : "",
    weakestSkill: weakestSkill ? weakestSkill.skill : "",
    strongestCognitive: strongestCognitive ? describeCognitiveLevel(strongestCognitive.level) : "",
    weakestCognitive: weakestCognitive ? describeCognitiveLevel(weakestCognitive.level) : "",
  };

  setSendStatus("idle", "Pronto para envio.");
  setSendButtonState("idle");
  missionsButton.disabled = false;
}

subjectPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    const subject = pill.dataset.subject;
    if (!subject || !ACTIVE_QUESTION_SETS[subject]) return;

    state.subject = subject;
    subjectPills.forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");

    const subjectName = SUBJECT_DISPLAY_NAMES[subject] || "Matemática";
    subjectNameWelcomeEl.textContent = subjectName;
    applySubjectTheme(subject);
    updateSubjectDecoration(subject);
  });
});

applySubjectTheme(state.subject);
updateSubjectDecoration(state.subject);
updateLoginButtonState();
renderWelcomeTyping(state.studentName, false);

studentNameInput.addEventListener("input", updateLoginButtonState);
studentClassYearInput.addEventListener("input", updateLoginButtonState);
studentClassGroupInput.addEventListener("input", updateLoginButtonState);
studentShiftInput?.addEventListener("change", updateLoginButtonState);

openStudentAreaButton?.addEventListener("click", openStudentArea);

backFromStudentAreaButton?.addEventListener("click", () => {
  const grid = studentJourneyDetailEl?.closest(".student-area-grid");
  if (grid?.classList.contains("journey-focus-mode")) {
    state.studentJourneyContext = null;
    grid.classList.remove("journey-focus-mode");
    grid.classList.add("journey-list-mode");
    const view = studentJourneyDetailEl.closest(".student-journey-view");
    if (view) view.hidden = true;
    studentJourneyDetailEl.hidden = true;
    if (studentAreaEmptyEl) studentAreaEmptyEl.hidden = true;
    backFromStudentAreaButton.textContent = "Sair";
    return;
  }
  state.studentJourneyContext = null;
  grid?.classList.remove("journey-list-mode", "journey-focus-mode");
  backFromStudentAreaButton.textContent = "Voltar";
  switchScreen("login");
});

continueLoginButton.addEventListener("click", () => {
  updateLoginButtonState();
  if (continueLoginButton.disabled) return;
  state.studentName = studentNameInput.value.trim();
  state.studentClassroom = studentClassroomInput.value.trim();
  state.studentShift = studentShiftInput?.value.trim() || "";
  renderWelcomeTyping(state.studentName, true);
  switchScreen("welcome");
});

devSkipLoginButton.addEventListener("click", () => {
  studentNameInput.value = "Aluno Teste";
  studentClassYearInput.value = "3";
  studentClassGroupInput.value = "5";
  if (studentShiftInput) studentShiftInput.value = "Matutino";
  updateLoginButtonState();
  state.studentName = studentNameInput.value.trim();
  state.studentClassroom = studentClassroomInput.value.trim();
  state.studentShift = studentShiftInput?.value.trim() || "";
  renderWelcomeTyping(state.studentName, false);
  switchScreen("welcome");
});

startButton.addEventListener("click", () => {
  resetState();
  feedbackBannerEl.className = "feedback-banner";
  feedbackBannerEl.textContent = "";
  switchScreen("quiz");
  renderQuestion();
});

nextButton.addEventListener("click", () => {
  const currentQuestion = getCurrentQuestion();
  const answerResult = applyAnswer();
  if (!answerResult.applied) return;

  const nextQuestionId = decideNextQuestion(currentQuestion, answerResult);
  if (!ADAPTIVE_SUBJECTS.has(state.subject)) {
    state.currentIndex += 1;
  }

  setTimeout(() => {
    feedbackBannerEl.className = "feedback-banner";
    feedbackBannerEl.textContent = "";

    if (nextQuestionId == null) {
      progressFillEl.style.width = "100%";
      progressBarEl.setAttribute("aria-valuenow", "100");
      progressBarEl.setAttribute("aria-valuetext", "Teste concluído");
      computeResult();
      switchScreen("result");
    } else {
      state.currentQuestionId = nextQuestionId;
      renderQuestion();
    }
  }, 650);
});

restartButton.addEventListener("click", () => {
  resetState();
  feedbackBannerEl.className = "feedback-banner";
  feedbackBannerEl.textContent = "";
  switchScreen("quiz");
  renderQuestion();
});

quizBackButton.addEventListener("click", () => {
  resetState();
  feedbackBannerEl.className = "feedback-banner";
  feedbackBannerEl.textContent = "";
  switchScreen("welcome");
});

backToStartButton.addEventListener("click", () => {
  resetState();
  feedbackBannerEl.className = "feedback-banner";
  feedbackBannerEl.textContent = "";
  studentNameInput.value = "";
  studentClassroomInput.value = "";
  studentClassYearInput.value = "";
  studentClassGroupInput.value = "";
  if (studentShiftInput) studentShiftInput.value = "";
  updateLoginButtonState();
  renderWelcomeTyping("", false);
  switchScreen("login");
});


function parseNumber(value) {
  if (value === null || value === undefined || value === "") return 0;
  const cleaned = String(value).replace(/[^0-9,.-]/g, "").replace(",", ".");
  const number = Number(cleaned);
  return Number.isFinite(number) ? number : 0;
}

function getDashboardField(row, keys, fallback = "") {
  for (const key of keys) {
    if (row[key] !== undefined && row[key] !== null && String(row[key]).trim() !== "") {
      return row[key];
    }
  }
  return fallback;
}

function normalizeDashboardRow(row) {
  const knownSubjects = new Set(Object.values(SUBJECT_DISPLAY_NAMES).map((name) => normalizeText(name)));
  const rawStudentName = String(getDashboardField(row, ["studentName", "Nome do aluno", "Nome", "Aluno"], "")).trim();
  const rawSubmittedAt = String(getDashboardField(row, ["submittedAt"], "")).trim();
  const isShiftedLegacyRow = knownSubjects.has(normalizeText(rawStudentName)) && rawSubmittedAt && !rawSubmittedAt.includes("T");

  const source = isShiftedLegacyRow
    ? {
        studentName: row.submittedAt,
        studentClassroom: row.schemaVersion,
        subject: row.studentName,
        level: row.studentClassroom,
        xp: row.subject,
        strongestSkill: row.level,
        weakestSkill: row.levelNumber,
        strongestCognitive: row.levelLabel,
        weakestCognitive: row.track,
      }
    : row;

  const levelText = String(getDashboardField(source, ["level", "Nível", "Nivel", "nivel"], "-")).trim();
  const levelMatch = levelText.match(/(\d+)/);
  const levelNumber = levelMatch ? Number(levelMatch[1]) : 0;
  const correctCount = parseNumber(getDashboardField(source, ["correctCount", "acertos", "Acertos"], 0));
  const partialCount = parseNumber(getDashboardField(source, ["partialCount", "parciais", "Parciais"], 0));
  const wrongCount = parseNumber(getDashboardField(source, ["wrongCount", "erros", "Erros"], 0));
  const totalAnswered = parseNumber(getDashboardField(source, ["totalAnswered", "totalrespondido", "Total respondido", "Total Respondido"], correctCount + partialCount + wrongCount));
  const explicitAccuracy = parseNumber(getDashboardField(source, ["accuracy", "accuracyPercent", "Taxa de acerto", "Taxa média", "Aproveitamento"], 0));
  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : Math.round(explicitAccuracy);

  return {
    submittedAt: String(getDashboardField(source, ["submittedAt", "Data", "data", "Timestamp"], "")).trim(),
    studentName: String(getDashboardField(source, ["studentName", "Nome do aluno", "Nome", "Aluno"], "Sem nome")).trim() || "Sem nome",
    studentClassroom: String(getDashboardField(source, ["studentClassroom", "Turma", "turma"], "Sem turma")).trim() || "Sem turma",
    studentShift: String(getDashboardField(source, ["studentShift", "Turno", "turno"], "Não informado")).trim() || "Não informado",
    subject: String(getDashboardField(source, ["subject", "Matéria", "Materia", "Disciplina"], "Sem disciplina")).trim() || "Sem disciplina",
    level: levelText || "-",
    levelNumber,
    xp: parseNumber(getDashboardField(source, ["xp", "XP", "Pontuação", "Pontuacao"], 0)),
    strongestSkill: String(getDashboardField(source, ["strongestSkill", "Ponto forte", "Habilidade forte"], "-")).trim() || "-",
    weakestSkill: String(getDashboardField(source, ["weakestSkill", "A reforçar", "Ponto a reforçar", "Habilidade fraca"], "-")).trim() || "-",
    strongestCognitive: String(getDashboardField(source, ["strongestCognitive", "Maior domínio cognitivo", "Maior dominio cognitivo"], "-")).trim() || "-",
    weakestCognitive: String(getDashboardField(source, ["weakestCognitive", "Maior dificuldade cognitiva"], "-")).trim() || "-",
    discursiveQuestion: String(getDashboardField(source, ["discursiveQuestion", "Questão dissertativa", "Pergunta dissertativa"], "-")).trim() || "-",
    discursiveAnswer: String(getDashboardField(source, ["discursiveAnswer", "Resposta dissertativa", "Resposta escrita"], "-")).trim() || "-",
    discursiveSkill: String(getDashboardField(source, ["discursiveSkill", "Habilidade dissertativa"], "-")).trim() || "-",
    discursiveCognitive: String(getDashboardField(source, ["discursiveCognitive", "Cognição dissertativa", "Cognitivo dissertativo"], "-")).trim() || "-",
    correctCount,
    partialCount,
    wrongCount,
    totalAnswered,
    accuracy,
  };
}

function createDashboardBadge(text, status = "") {
  const badge = document.createElement("span");
  badge.className = status ? `dashboard-badge ${status}` : "dashboard-badge";
  badge.textContent = text;
  return badge;
}

function renderDashboardEmptyList(container, message) {
  const item = document.createElement("div");
  item.className = "dashboard-list-item";
  item.textContent = message;
  container.replaceChildren(item);
}

function setSelectOptions(selectEl, values, currentValue = "Todas", allLabel = "Todas") {
  if (!selectEl) return;
  const uniqueValues = [allLabel, ...Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b, "pt-BR"))];
  selectEl.replaceChildren(...uniqueValues.map((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    return option;
  }));
  selectEl.value = uniqueValues.includes(currentValue) ? currentValue : allLabel;
}

function populateDashboardFilters() {
  const currentClassroom = dashboardClassroomFilter?.value || "Todas";
  const currentShift = dashboardShiftFilter?.value || "Todos";
  const currentSubject = dashboardSubjectFilter?.value || "Todas";
  setSelectOptions(dashboardClassroomFilter, state.dashboardRows.map((row) => row.studentClassroom), currentClassroom);
  setSelectOptions(dashboardShiftFilter, state.dashboardRows.map((row) => row.studentShift), currentShift, "Todos");
  setSelectOptions(dashboardSubjectFilter, state.dashboardRows.map((row) => row.subject), currentSubject);
}

function getFilteredDashboardRows() {
  const search = normalizeText(dashboardSearchInput?.value || "");
  const classroom = dashboardClassroomFilter?.value || "Todas";
  const shift = dashboardShiftFilter?.value || "Todos";
  const subject = dashboardSubjectFilter?.value || "Todas";

  return state.dashboardRows.filter((row) => {
    const matchesSearch = !search || normalizeText(row.studentName).includes(search);
    const matchesClassroom = classroom === "Todas" || row.studentClassroom === classroom;
    const matchesShift = shift === "Todos" || row.studentShift === shift;
    const matchesSubject = subject === "Todas" || row.subject === subject;
    return matchesSearch && matchesClassroom && matchesShift && matchesSubject;
  });
}

function getDashboardFilterSummary() {
  const search = dashboardSearchInput?.value.trim();
  const classroom = dashboardClassroomFilter?.value || "Todas";
  const shift = dashboardShiftFilter?.value || "Todos";
  const subject = dashboardSubjectFilter?.value || "Todas";
  return [
    search ? `Aluno contém: ${search}` : "Busca por aluno: todos",
    `Turma: ${classroom}`,
    `Turno: ${shift}`,
    `Disciplina: ${subject}`,
  ];
}

function setTeacherToolVisibility(toolEl, isVisible) {
  if (!toolEl) return;
  toolEl.hidden = !isVisible;
  toolEl.setAttribute("aria-hidden", isVisible ? "false" : "true");
}

function getReportStudentKey(row) {
  return `${row.studentName}::${row.studentClassroom}::${row.studentShift || "Não informado"}`;
}

function getCheckedReportValues(container) {
  if (!container) return [];
  return [...container.querySelectorAll("input[type='checkbox']:checked")].map((input) => input.value);
}

function createReportChecklist(container, values, groupName, selectedValues = []) {
  if (!container) return;
  const selected = new Set(selectedValues);
  const uniqueValues = Array.from(new Set(values.filter(Boolean))).sort((left, right) => left.localeCompare(right, "pt-BR"));
  if (!uniqueValues.length) {
    renderDashboardEmptyList(container, "Sem opções disponíveis.");
    return;
  }

  const nodes = uniqueValues.map((value) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    const text = document.createElement("span");
    label.className = "report-check";
    input.type = "checkbox";
    input.name = groupName;
    input.value = value;
    input.checked = selected.has(value);
    text.textContent = value;
    label.append(input, text);
    return label;
  });
  container.replaceChildren(...nodes);
}

function getReportStudentSearch() {
  return normalizeText(reportStudentSearchInput?.value || "");
}

function renderReportStudentOptions(selectedKeys = getCheckedReportValues(reportStudentOptionsEl)) {
  if (!reportStudentOptionsEl) return;
  const search = getReportStudentSearch();
  const selected = new Set(selectedKeys);
  const students = new Map();
  state.dashboardRows.forEach((row) => {
    const key = getReportStudentKey(row);
    const label = `${row.studentName} · ${row.studentClassroom} · ${row.studentShift || "Não informado"}`;
    if (!search || normalizeText(label).includes(search) || selected.has(key)) {
      students.set(key, label);
    }
  });

  const nodes = [...students.entries()]
    .sort((left, right) => left[1].localeCompare(right[1], "pt-BR"))
    .map(([key, labelText]) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      const text = document.createElement("span");
      label.className = "report-check";
      input.type = "checkbox";
      input.name = "report-student";
      input.value = key;
      input.checked = selected.has(key);
      text.textContent = labelText;
      label.append(input, text);
      return label;
    });

  if (!nodes.length) {
    renderDashboardEmptyList(reportStudentOptionsEl, "Nenhum aluno encontrado para a busca.");
    return;
  }
  reportStudentOptionsEl.replaceChildren(...nodes);
}

function populateReportFilterOptions() {
  createReportChecklist(reportClassroomOptionsEl, state.dashboardRows.map((row) => row.studentClassroom), "report-classroom", getCheckedReportValues(reportClassroomOptionsEl));
  createReportChecklist(reportShiftOptionsEl, state.dashboardRows.map((row) => row.studentShift), "report-shift", getCheckedReportValues(reportShiftOptionsEl));
  createReportChecklist(reportSubjectOptionsEl, state.dashboardRows.map((row) => row.subject), "report-subject", getCheckedReportValues(reportSubjectOptionsEl));
  createReportChecklist(reportLevelOptionsEl, ["Nível 1", "Nível 2", "Nível 3", "Nível 4"], "report-level", getCheckedReportValues(reportLevelOptionsEl));
  createReportChecklist(reportWeakSkillOptionsEl, state.dashboardRows.map((row) => row.weakestSkill), "report-weak-skill", getCheckedReportValues(reportWeakSkillOptionsEl));
  createReportChecklist(reportWeakCognitiveOptionsEl, state.dashboardRows.map((row) => row.weakestCognitive), "report-weak-cognitive", getCheckedReportValues(reportWeakCognitiveOptionsEl));
  renderReportStudentOptions();
}

function selectReportChecklistValue(container, value) {
  if (!container || !value || value === "Todas") return;
  container.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.checked = input.value === value;
  });
}

function useDashboardFiltersForReport() {
  populateReportFilterOptions();
  reportClassroomOptionsEl?.querySelectorAll("input[type='checkbox']").forEach((input) => { input.checked = false; });
  reportShiftOptionsEl?.querySelectorAll("input[type='checkbox']").forEach((input) => { input.checked = false; });
  reportSubjectOptionsEl?.querySelectorAll("input[type='checkbox']").forEach((input) => { input.checked = false; });
  reportLevelOptionsEl?.querySelectorAll("input[type='checkbox']").forEach((input) => { input.checked = false; });
  reportWeakSkillOptionsEl?.querySelectorAll("input[type='checkbox']").forEach((input) => { input.checked = false; });
  reportWeakCognitiveOptionsEl?.querySelectorAll("input[type='checkbox']").forEach((input) => { input.checked = false; });
  selectReportChecklistValue(reportClassroomOptionsEl, dashboardClassroomFilter?.value);
  selectReportChecklistValue(reportShiftOptionsEl, dashboardShiftFilter?.value);
  selectReportChecklistValue(reportSubjectOptionsEl, dashboardSubjectFilter?.value);
  if (reportStudentSearchInput) reportStudentSearchInput.value = dashboardSearchInput?.value || "";
  renderReportStudentOptions([]);
  updateReportFilterPreview();
}

function getReportLevelLabel(row) {
  return row.levelNumber > 0 ? `Nível ${row.levelNumber}` : "Sem nível";
}

function parseReportTimestamp(value) {
  if (!value) return null;
  const time = new Date(value).getTime();
  return Number.isFinite(time) ? time : null;
}

function getReportRows() {
  const classrooms = new Set(getCheckedReportValues(reportClassroomOptionsEl));
  const shifts = new Set(getCheckedReportValues(reportShiftOptionsEl));
  const subjects = new Set(getCheckedReportValues(reportSubjectOptionsEl));
  const levels = new Set(getCheckedReportValues(reportLevelOptionsEl));
  const weakSkills = new Set(getCheckedReportValues(reportWeakSkillOptionsEl));
  const weakCognitives = new Set(getCheckedReportValues(reportWeakCognitiveOptionsEl));
  const students = new Set(getCheckedReportValues(reportStudentOptionsEl));
  const studentSearch = getReportStudentSearch();
  const accuracy = reportAccuracyFilter?.value || "all";
  const fromTime = reportDateFromInput?.value ? new Date(`${reportDateFromInput.value}T00:00:00`).getTime() : null;
  const toTime = reportDateToInput?.value ? new Date(`${reportDateToInput.value}T23:59:59`).getTime() : null;

  const filteredRows = state.dashboardRows.filter((row) => {
    const timestamp = parseReportTimestamp(row.submittedAt);
    const matchesClassroom = !classrooms.size || classrooms.has(row.studentClassroom);
    const matchesShift = !shifts.size || shifts.has(row.studentShift);
    const matchesSubject = !subjects.size || subjects.has(row.subject);
    const matchesLevel = !levels.size || levels.has(getReportLevelLabel(row));
    const matchesWeakSkill = !weakSkills.size || weakSkills.has(row.weakestSkill);
    const matchesWeakCognitive = !weakCognitives.size || weakCognitives.has(row.weakestCognitive);
    const matchesSelectedStudent = !students.size || students.has(getReportStudentKey(row));
    const matchesStudentSearch = students.size || !studentSearch || normalizeText(`${row.studentName} ${row.studentClassroom} ${row.studentShift}`).includes(studentSearch);
    const matchesFrom = fromTime == null || (timestamp != null && timestamp >= fromTime);
    const matchesTo = toTime == null || (timestamp != null && timestamp <= toTime);
    const matchesAccuracy = accuracy === "low"
      ? row.accuracy < 50
      : accuracy === "middle"
        ? row.accuracy >= 50 && row.accuracy <= 85
        : accuracy === "high"
          ? row.accuracy > 85
          : true;
    return matchesClassroom && matchesShift && matchesSubject && matchesLevel && matchesWeakSkill && matchesWeakCognitive && matchesSelectedStudent && matchesStudentSearch && matchesFrom && matchesTo && matchesAccuracy;
  });

  return keepLatestReportRows(filteredRows, reportRecordModeInput?.value || "all");
}

function keepLatestReportRows(rows, mode) {
  if (mode === "all") return rows;
  const latestRows = new Map();
  rows.forEach((row) => {
    const studentKey = getReportStudentKey(row);
    const key = mode === "latest-student" ? studentKey : `${studentKey}::${row.subject}`;
    const timestamp = parseReportTimestamp(row.submittedAt) ?? -1;
    const current = latestRows.get(key);
    const currentTimestamp = current ? (parseReportTimestamp(current.submittedAt) ?? -1) : -Infinity;
    if (!current || timestamp >= currentTimestamp) latestRows.set(key, row);
  });
  return [...latestRows.values()];
}

function describeReportSelection(values, emptyLabel) {
  return values.length ? values.join(", ") : emptyLabel;
}

function getReportFilterSummary() {
  const students = getCheckedReportValues(reportStudentOptionsEl);
  const studentSearch = reportStudentSearchInput?.value.trim();
  const studentSummary = students.length
    ? `${students.length} aluno(s) marcado(s)`
    : studentSearch
      ? `Nome contém: ${studentSearch}`
      : "Todos os alunos";
  const period = reportDateFromInput?.value || reportDateToInput?.value
    ? `Período: ${reportDateFromInput?.value || "início"} até ${reportDateToInput?.value || "hoje"}`
    : "Período: histórico completo";
  const accuracyLabels = {
    all: "Desempenho: todas as faixas",
    low: "Desempenho: abaixo de 50%",
    middle: "Desempenho: 50% a 85%",
    high: "Desempenho: acima de 85%",
  };
  const recordLabels = {
    all: "Registros: todas as tentativas",
    "latest-subject": "Registros: mais recente por aluno e matéria",
    "latest-student": "Registros: mais recente por aluno",
  };
  return [
    `Turmas: ${describeReportSelection(getCheckedReportValues(reportClassroomOptionsEl), "todas")}`,
    `Turnos: ${describeReportSelection(getCheckedReportValues(reportShiftOptionsEl), "todos")}`,
    `Disciplinas: ${describeReportSelection(getCheckedReportValues(reportSubjectOptionsEl), "todas")}`,
    `Níveis: ${describeReportSelection(getCheckedReportValues(reportLevelOptionsEl), "todos")}`,
    `A reforçar: ${describeReportSelection(getCheckedReportValues(reportWeakSkillOptionsEl), "todas as habilidades")}`,
    `Dificuldade cognitiva: ${describeReportSelection(getCheckedReportValues(reportWeakCognitiveOptionsEl), "todas")}`,
    studentSummary,
    period,
    accuracyLabels[reportAccuracyFilter?.value || "all"],
    recordLabels[reportRecordModeInput?.value || "all"],
  ];
}

function getReportContentOptions() {
  return {
    includeTable: reportIncludeTableInput?.checked !== false,
    includeDiscursives: reportIncludeDiscursivesInput?.checked !== false,
  };
}

function updateReportFilterPreview() {
  if (!reportFilterPreviewEl) return;
  const rows = getReportRows();
  const markedStudents = getCheckedReportValues(reportStudentOptionsEl).length;
  reportFilterPreviewEl.textContent = `${rows.length} registro(s) entram no PDF. ${markedStudents ? `${markedStudents} aluno(s) marcado(s).` : "Nenhum aluno marcado: o filtro considera todos os alunos compatíveis."}`;
}

function openReportFilterModal() {
  useDashboardFiltersForReport();
  setTeacherToolVisibility(reportFilterModalEl, true);
  reportStudentSearchInput?.focus();
}

function countDashboardValues(rows, key) {
  return rows.reduce((map, row) => {
    const value = row[key] && row[key] !== "-" ? row[key] : "Não informado";
    map[value] = (map[value] || 0) + 1;
    return map;
  }, {});
}

function getTopDashboardValue(rows, key) {
  return Object.entries(countDashboardValues(rows, key)).sort((left, right) => right[1] - left[1])[0] || null;
}

function getReportRecommendation(rows) {
  if (!rows.length) return "Nenhum resultado atende aos filtros atuais. Ajuste os filtros ou atualize os dados antes de gerar um diagnóstico.";
  const mainWeakSkill = getTopDashboardValue(rows, "weakestSkill");
  const mainWeakCognitive = getTopDashboardValue(rows, "weakestCognitive");
  const lowPerformance = rows.filter((row) => row.accuracy < 50).length;
  const skillText = mainWeakSkill && mainWeakSkill[0] !== "Não informado"
    ? `priorize atividades de ${mainWeakSkill[0]}`
    : "revise as habilidades com menor desempenho";
  const cognitiveText = mainWeakCognitive && mainWeakCognitive[0] !== "Não informado"
    ? `com apoio especial em ${mainWeakCognitive[0].toLowerCase()}`
    : "observando as dimensões cognitivas frágeis";
  const groupingText = lowPerformance
    ? ` Há ${lowPerformance} registro(s) abaixo de 50% de acertos para acompanhamento mais próximo.`
    : " O recorte atual não mostra desempenho geral abaixo de 50%.";
  return `Para este recorte, ${skillText}, ${cognitiveText}.${groupingText}`;
}

function populateDashboardQuestionSubjects() {
  if (!dashboardQuestionSubjectFilter) return;
  const subjects = Object.keys(ACTIVE_QUESTION_SETS);
  dashboardQuestionSubjectFilter.replaceChildren(...subjects.map((subject) => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = SUBJECT_DISPLAY_NAMES[subject] || subject;
    return option;
  }));
  dashboardQuestionSubjectFilter.value = dashboardQuestionSubjectFilter.value || state.subject || subjects[0];
}

function setQuestionBankStatus(message, type = "") {
  if (!questionBankStatusEl) return;
  questionBankStatusEl.textContent = message;
  questionBankStatusEl.dataset.status = type;
}

function refreshQuestionSessions() {
  const sessionBank = createSessionQuestionSets();
  SESSION_QUESTION_SETS = sessionBank.questionSets;
  SESSION_QUESTION_VERSIONS = sessionBank.versions;
  SESSION_QUESTION_LOOKUPS = createQuestionLookups(SESSION_QUESTION_SETS);
}

function applyManagedQuestionSets(subjects) {
  if (!subjects || !Object.keys(subjects).length) return;
  ACTIVE_QUESTION_SETS = subjects;
  refreshQuestionSessions();
  populateDashboardQuestionSubjects();
}

async function loadManagedQuestionBank({ seedIfEmpty = true } = {}) {
  try {
    setQuestionBankStatus("Carregando banco de questões...");
    const { data } = await fetchJsonWithRetry(QUESTION_BANK_API_URL, {}, { attempts: 2, timeoutMs: 8000 });
    let subjects = data.subjects || {};
    if (!Object.keys(subjects).length && seedIfEmpty) {
      const seedResponse = await fetch(QUESTION_BANK_API_URL + "/import", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ mode: "replace", subjects: SUBJECT_QUESTION_SETS }),
      });
      const seeded = await seedResponse.json();
      if (!seedResponse.ok) throw new Error(seeded.error || "Não foi possível preparar o banco de questões.");
      subjects = seeded.subjects || SUBJECT_QUESTION_SETS;
    }
    applyManagedQuestionSets(subjects);
    setQuestionBankStatus("Banco atualizado. Alterações em slots de 1 a 10 entram nas próximas sessões.", "success");
    return subjects;
  } catch (error) {
    ACTIVE_QUESTION_SETS = SUBJECT_QUESTION_SETS;
    refreshQuestionSessions();
    setQuestionBankStatus("Banco local indisponível. Usando as questões padrão desta versão.", "error");
    return ACTIVE_QUESTION_SETS;
  }
}

function createQuestionMetaBadge(text) {
  const badge = document.createElement("span");
  badge.className = "dashboard-badge";
  badge.textContent = text;
  return badge;
}

function renderDashboardQuestions() {
  if (!dashboardQuestionListEl) return;
  const subject = dashboardQuestionSubjectFilter?.value || "matematica";
  const questions = ACTIVE_QUESTION_SETS[subject] || [];
  if (!questions.length) {
    renderDashboardEmptyList(dashboardQuestionListEl, "Nenhuma questão cadastrada para esta matéria.");
    return;
  }

  const cards = questions.map((question) => {
    const card = document.createElement("article");
    const meta = document.createElement("div");
    const text = document.createElement("p");
    const answer = document.createElement("p");
    card.className = "dashboard-question-card";
    meta.className = "dashboard-question-meta";
    text.className = "dashboard-question-text";
    answer.className = "dashboard-question-answer";
    meta.append(
      createQuestionMetaBadge(`Questão ${question.id}`),
      createQuestionMetaBadge(Number(question.id) <= 10 ? "Slot adaptativo" : "Reserva"),
      createQuestionMetaBadge(`v${question.version || 1}`),
      createQuestionMetaBadge(question.difficulty),
      createQuestionMetaBadge(describeCognitiveLevel(question.cognitiveLevel)),
      createQuestionMetaBadge(question.skill)
    );
    text.textContent = question.text;
    card.append(meta, text);

    if (question.type === "dissertativa") {
      answer.textContent = `Resposta de referência: ${question.idealAnswer}`;
    } else {
      const options = document.createElement("ol");
      const correctOption = question.options?.find((option) => option.correct);
      options.className = "dashboard-question-options";
      (question.options || []).forEach((option) => {
        const item = document.createElement("li");
        item.textContent = option.label;
        options.appendChild(item);
      });
      answer.textContent = `Gabarito: ${correctOption?.label || "Não informado"}`;
      card.appendChild(options);
    }
    card.appendChild(answer);

    const actions = document.createElement("div");
    actions.className = "question-card-actions";
    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "secondary-button";
    editButton.textContent = "Editar";
    editButton.addEventListener("click", () => openQuestionEditor(question));
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "secondary-button danger-button";
    deleteButton.textContent = "Excluir";
    deleteButton.disabled = Number(question.id) <= 10;
    deleteButton.title = deleteButton.disabled ? "Slots adaptativos devem ser editados ou substituídos por importação." : "Excluir questão de reserva";
    deleteButton.addEventListener("click", () => deleteManagedQuestion(question));
    actions.append(editButton, deleteButton);
    card.appendChild(actions);
    return card;
  });
  dashboardQuestionListEl.replaceChildren(...cards);
}

function updateQuestionEditorType() {
  const isDiscursive = questionEditorTypeInput?.value === "dissertativa";
  if (questionEditorOptionsEl) questionEditorOptionsEl.hidden = isDiscursive;
  if (questionEditorAnswerWrapEl) questionEditorAnswerWrapEl.hidden = !isDiscursive;
  questionEditorAnswerInput?.toggleAttribute("required", isDiscursive);
  questionEditorEl?.querySelectorAll("[data-question-option]").forEach((input, index) => {
    input.toggleAttribute("required", !isDiscursive && index < 2);
  });
  questionEditorEl?.querySelectorAll("input[name='question-correct-option']").forEach((radio, index) => {
    radio.toggleAttribute("required", !isDiscursive && index === 0);
  });
}

function openQuestionEditor(question = null) {
  if (!questionEditorEl) return;
  const subject = dashboardQuestionSubjectFilter?.value || "matematica";
  const questions = ACTIVE_QUESTION_SETS[subject] || [];
  const nextId = questions.reduce((max, item) => Math.max(max, Number(item.id || 0)), 0) + 1;
  questionEditorEl.hidden = false;
  questionEditorOriginalIdInput.value = question ? String(question.id) : "";
  questionEditorTitleEl.textContent = question ? `Editar questão ${question.id}` : "Nova questão de reserva";
  questionEditorIdInput.value = question ? String(question.id) : String(nextId);
  questionEditorIdInput.disabled = Boolean(question);
  questionEditorTypeInput.value = question?.type || "multipla_escolha";
  questionEditorDifficultyInput.value = question?.difficulty || "médio";
  questionEditorCognitiveInput.value = question?.cognitiveLevel || "interpretacao";
  questionEditorSkillInput.value = question?.skill || "";
  questionEditorTextInput.value = question?.text || "";
  questionEditorAnswerInput.value = question?.idealAnswer || "";
  const optionInputs = [...questionEditorEl.querySelectorAll("[data-question-option]")];
  const radios = [...questionEditorEl.querySelectorAll("input[name='question-correct-option']")];
  optionInputs.forEach((input, index) => { input.value = question?.options?.[index]?.label || ""; });
  radios.forEach((radio, index) => { radio.checked = Boolean(question?.options?.[index]?.correct) || (!question && index === 0); });
  updateQuestionEditorType();
  questionEditorEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeQuestionEditor() {
  if (questionEditorEl) questionEditorEl.hidden = true;
}

function getQuestionEditorPayload() {
  const type = questionEditorTypeInput.value;
  const question = {
    id: Number(questionEditorIdInput.value),
    type,
    difficulty: questionEditorDifficultyInput.value,
    cognitiveLevel: questionEditorCognitiveInput.value,
    skill: questionEditorSkillInput.value.trim(),
    text: questionEditorTextInput.value.trim(),
  };
  if (type === "dissertativa") {
    question.idealAnswer = questionEditorAnswerInput.value.trim();
  } else {
    const selected = questionEditorEl.querySelector("input[name='question-correct-option']:checked")?.value;
    question.options = [...questionEditorEl.querySelectorAll("[data-question-option]")]
      .map((input, index) => ({ label: input.value.trim(), correct: String(index) === selected }))
      .filter((option) => option.label);
  }
  return question;
}

async function saveManagedQuestion(event) {
  event.preventDefault();
  const subject = dashboardQuestionSubjectFilter?.value || "matematica";
  const originalId = questionEditorOriginalIdInput.value;
  const question = getQuestionEditorPayload();
  const url = originalId ? `${QUESTION_BANK_API_URL}/${encodeURIComponent(subject)}/${encodeURIComponent(originalId)}` : QUESTION_BANK_API_URL;
  const method = originalId ? "PATCH" : "POST";
  setQuestionBankStatus("Salvando questão...");
  try {
    const response = await fetch(url, {
      method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(originalId ? { question } : { subject, question }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Não foi possível salvar a questão.");
    applyManagedQuestionSets(data.subjects);
    renderDashboardQuestions();
    closeQuestionEditor();
    setQuestionBankStatus(`Questão ${data.question.id} salva como versão ${data.question.version || 1}.`, "success");
  } catch (error) {
    setQuestionBankStatus(error.message, "error");
  }
}

async function deleteManagedQuestion(question) {
  if (Number(question.id) <= 10) return;
  if (!window.confirm(`Excluir definitivamente a questão ${question.id}?`)) return;
  const subject = dashboardQuestionSubjectFilter?.value || "matematica";
  try {
    const response = await fetch(`${QUESTION_BANK_API_URL}/${encodeURIComponent(subject)}/${encodeURIComponent(question.id)}`, { method: "DELETE" });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Não foi possível excluir a questão.");
    applyManagedQuestionSets(data.subjects);
    renderDashboardQuestions();
    setQuestionBankStatus(`Questão ${question.id} excluída.`, "success");
  } catch (error) {
    setQuestionBankStatus(error.message, "error");
  }
}

async function importManagedQuestions(file) {
  if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    const subjects = parsed.subjects || parsed;
    const response = await fetch(QUESTION_BANK_API_URL + "/import", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ mode: "merge", subjects }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Não foi possível importar o arquivo.");
    applyManagedQuestionSets(data.subjects);
    renderDashboardQuestions();
    setQuestionBankStatus("Importação concluída. Questões com o mesmo ID foram versionadas.", "success");
  } catch (error) {
    setQuestionBankStatus(`Falha na importação: ${error.message}`, "error");
  } finally {
    questionImportInput.value = "";
  }
}

function exportManagedQuestions() {
  const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), subjects: ACTIVE_QUESTION_SETS }, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `smart-study-questoes-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

let managedJourneyRecords = [];

function setJourneyManagerStatus(message, type = "") {
  if (!journeyManagerStatusEl) return;
  journeyManagerStatusEl.textContent = message;
  journeyManagerStatusEl.dataset.status = type;
}

function getManagedJourneyDuplicateKey(record) {
  return [record.studentName, record.studentClassroom, record.studentShift, record.subject, record.title]
    .map((value) => normalizeText(String(value || "")))
    .join("|");
}

function formatManagedJourneyDate(value) {
  if (!value) return "Data não informada";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "Data não informada" : date.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
}

function renderManagedJourneys() {
  if (!journeyManagerListEl) return;
  const search = normalizeText(journeyManagerSearchInput?.value || "");
  const showArchived = Boolean(journeyManagerShowArchivedInput?.checked);
  const duplicateCounts = managedJourneyRecords.reduce((counts, record) => {
    const key = getManagedJourneyDuplicateKey(record);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
  const visible = managedJourneyRecords.filter((record) => {
    if (record.archivedAt && !showArchived) return false;
    if (!search) return true;
    return normalizeText([record.title, record.studentName, record.studentClassroom, record.studentShift, record.subject, record.pdfFile].join(" ")).includes(search);
  });
  if (!visible.length) {
    renderDashboardEmptyList(journeyManagerListEl, showArchived ? "Nenhuma trilha corresponde aos filtros." : "Nenhuma trilha ativa corresponde aos filtros.");
    return;
  }
  const cards = visible.map((record) => {
    const card = document.createElement("article");
    card.className = "journey-manager-card" + (record.archivedAt ? " archived" : "");
    const header = document.createElement("div");
    header.className = "journey-manager-card-header";
    const identity = document.createElement("div");
    identity.append(
      createTextEl("strong", "journey-manager-student", record.studentName),
      createTextEl("span", "journey-manager-meta", `${record.studentClassroom} · ${record.studentShift || "Não informado"} · ${SUBJECT_DISPLAY_NAMES[record.subject] || record.subject || "Disciplina"}`)
    );
    const badges = document.createElement("div");
    badges.className = "journey-manager-badges";
    if (duplicateCounts[getManagedJourneyDuplicateKey(record)] > 1) badges.appendChild(createDashboardBadge("Possível duplicada", "warning"));
    if (record.archivedAt) badges.appendChild(createDashboardBadge("Arquivada", "danger"));
    header.append(identity, badges);

    const titleLabel = document.createElement("label");
    titleLabel.className = "journey-manager-title-field";
    const titleCaption = createTextEl("span", "dashboard-label", "Nome da trilha");
    const titleInput = document.createElement("input");
    titleInput.className = "dashboard-input";
    titleInput.value = record.title;
    titleInput.maxLength = 120;
    titleLabel.append(titleCaption, titleInput);

    const details = document.createElement("div");
    details.className = "journey-manager-details";
    details.append(
      createTextEl("span", "", `Criada em ${formatManagedJourneyDate(record.createdAt)}`),
      createTextEl("span", "", record.pdfFile ? `PDF: ${record.pdfFile}` : "PDF de origem não informado")
    );

    const actions = document.createElement("div");
    actions.className = "journey-manager-actions";
    const saveButton = document.createElement("button");
    saveButton.type = "button";
    saveButton.className = "primary-button";
    saveButton.textContent = "Salvar nome";
    saveButton.addEventListener("click", () => updateManagedJourney(record.id, { action: "rename", title: titleInput.value }));
    const archiveButton = document.createElement("button");
    archiveButton.type = "button";
    archiveButton.className = "secondary-button";
    archiveButton.textContent = record.archivedAt ? "Restaurar" : "Arquivar";
    archiveButton.addEventListener("click", () => updateManagedJourney(record.id, { action: record.archivedAt ? "restore" : "archive" }));
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "secondary-button danger-button";
    deleteButton.textContent = "Excluir definitivamente";
    deleteButton.addEventListener("click", () => deleteManagedJourney(record));
    actions.append(saveButton, archiveButton, deleteButton);
    card.append(header, titleLabel, details, actions);
    return card;
  });
  journeyManagerListEl.replaceChildren(...cards);
}

async function loadManagedJourneys() {
  setJourneyManagerStatus("Carregando trilhas...");
  try {
    const { data } = await fetchJsonWithRetry(JOURNEY_MANAGER_API_URL, {}, { attempts: 2, timeoutMs: 10000 });
    managedJourneyRecords = data.journeys || [];
    renderManagedJourneys();
    const archivedCount = managedJourneyRecords.filter((record) => record.archivedAt).length;
    setJourneyManagerStatus(`${managedJourneyRecords.length} trilha(s) encontrada(s) · ${archivedCount} arquivada(s).`, "success");
  } catch (error) {
    managedJourneyRecords = [];
    renderManagedJourneys();
    setJourneyManagerStatus(error.message || "Não foi possível carregar as trilhas.", "error");
  }
}

async function updateManagedJourney(id, payload) {
  try {
    const response = await fetch(`/api/journeys/${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Não foi possível atualizar a trilha.");
    const index = managedJourneyRecords.findIndex((record) => record.id === id);
    if (index >= 0) managedJourneyRecords[index] = data.journey;
    renderManagedJourneys();
    setJourneyManagerStatus(payload.action === "rename" ? "Nome atualizado." : payload.action === "archive" ? "Trilha arquivada e removida da área do aluno." : "Trilha restaurada.", "success");
  } catch (error) {
    setJourneyManagerStatus(error.message, "error");
  }
}

async function deleteManagedJourney(record) {
  const confirmation = `Excluir definitivamente “${record.title}” de ${record.studentName}? O progresso associado também será removido.`;
  if (!window.confirm(confirmation)) return;
  try {
    const response = await fetch(`/api/journeys/${encodeURIComponent(record.id)}`, { method: "DELETE" });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Não foi possível excluir a trilha.");
    managedJourneyRecords = managedJourneyRecords.filter((item) => item.id !== record.id);
    renderManagedJourneys();
    setJourneyManagerStatus("Trilha e progresso associado excluídos definitivamente.", "success");
  } catch (error) {
    setJourneyManagerStatus(error.message, "error");
  }
}

function escapeReportHtml(value) {
  return String(value ?? "-")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeHtml(value) {
  return escapeReportHtml(value);
}

function renderReportValueList(rows, key) {
  const entries = Object.entries(countDashboardValues(rows, key)).sort((left, right) => right[1] - left[1]);
  if (!entries.length) return "<li>Sem dados.</li>";
  return entries.slice(0, 6).map(([label, count]) => `<li><strong>${escapeReportHtml(label)}</strong><span>${count} registro(s)</span></li>`).join("");
}

function formatReportStudentName(name) {
  const raw = String(name || "Sem nome").trim().replace(/\s+/g, " ");
  if (!raw) return "Sem nome";
  const lowerWords = new Set(["da", "de", "do", "das", "dos", "e"]);
  return raw.toLocaleLowerCase("pt-BR").split(" ").map((word, index) => {
    if (!word) return "";
    if (index > 0 && lowerWords.has(word)) return word;
    return word.charAt(0).toLocaleUpperCase("pt-BR") + word.slice(1);
  }).join(" ");
}

function getReportEntries(rows, key, limit = 6) {
  return Object.entries(countDashboardValues(rows, key))
    .filter(([label]) => label && label !== "-")
    .sort((left, right) => right[1] - left[1])
    .slice(0, limit)
    .map(([label, count]) => ({ label, count }));
}

function renderReportBars(items, total, className = "") {
  if (!items.length) return "<p class='muted'>Sem dados suficientes.</p>";
  return `<div class="chart-bars ${className}">${items.map((item) => {
    const percent = total ? Math.round((item.count / total) * 100) : 0;
    return `<div class="chart-row"><span>${escapeReportHtml(item.label)}</span><div class="track"><i style="width:${percent}%"></i></div><b>${item.count}</b></div>`;
  }).join("")}</div>`;
}

function getReportPerformanceBands(rows) {
  return [
    { label: "Baixo (<50%)", count: rows.filter((row) => row.accuracy < 50).length, className: "low" },
    { label: "Intermediário (50-85%)", count: rows.filter((row) => row.accuracy >= 50 && row.accuracy <= 85).length, className: "middle" },
    { label: "Alto (>85%)", count: rows.filter((row) => row.accuracy > 85).length, className: "high" },
  ];
}

function renderReportPerformanceBars(bands, total) {
  if (!bands.length) return "<p class='muted'>Sem dados suficientes.</p>";
  return `<div class="performance-bars">${bands.map((band) => {
    const percent = total ? Math.round((band.count / total) * 100) : 0;
    return `<div class="performance-row ${band.className}"><div><strong>${escapeReportHtml(band.label)}</strong><span>${band.count} registro(s) · ${percent}%</span></div><div class="track"><i style="width:${percent}%"></i></div></div>`;
  }).join("")}</div>`;
}

function renderReportCognitiveComparison(rows) {
  const labels = Array.from(new Set([
    ...getReportEntries(rows, "strongestCognitive", 12).map((item) => item.label),
    ...getReportEntries(rows, "weakestCognitive", 12).map((item) => item.label),
  ]));
  if (!labels.length) return "<p class='muted'>Sem dados cognitivos suficientes.</p>";
  const strongMap = countDashboardValues(rows, "strongestCognitive");
  const weakMap = countDashboardValues(rows, "weakestCognitive");
  const max = Math.max(...labels.map((label) => Math.max(strongMap[label] || 0, weakMap[label] || 0)), 1);
  return `<div class="cognitive-compare">${labels.slice(0, 6).map((label) => {
    const strong = strongMap[label] || 0;
    const weak = weakMap[label] || 0;
    return `<div class="compare-row"><strong>${escapeReportHtml(label)}</strong><span class="compare-track"><i class="strong" style="width:${Math.round((strong / max) * 100)}%"></i></span><b>${strong}</b><span class="compare-track"><i class="weak" style="width:${Math.round((weak / max) * 100)}%"></i></span><b>${weak}</b></div>`;
  }).join("")}<div class="compare-legend"><span class="strong"></span> Domínio cognitivo <span class="weak"></span> Dificuldade cognitiva</div></div>`;
}

function getReportInstitutionalConclusion(rows, avgAccuracy, lowPerformance) {
  if (!rows.length) {
    return "Não há registros no recorte selecionado. Recomenda-se coletar novos diagnósticos antes de tomar decisões pedagógicas.";
  }
  if (lowPerformance > rows.length / 2) {
    return `O diagnóstico indica necessidade de intervenção pedagógica prioritária: ${lowPerformance} de ${rows.length} registro(s) estão abaixo de 50% de aproveitamento. A escola pode usar estes dados para organizar grupos de reforço, retomadas por habilidade e acompanhamento próximo dos estudantes.`;
  }
  if (avgAccuracy >= 75) {
    return `A turma apresenta um panorama geral favorável, com média de ${avgAccuracy}% de aproveitamento. O relatório sugere manter os avanços, aprofundar habilidades de maior complexidade e acompanhar os estudantes que ainda aparecem nos alertas.`;
  }
  return `O diagnóstico mostra um cenário intermediário, com média de ${avgAccuracy}% de aproveitamento. A recomendação institucional é combinar revisão das habilidades críticas, acompanhamento por grupos e nova aplicação diagnóstica após as intervenções.`;
}

function renderReportTeacherActions(rows) {
  const weakSkills = getReportEntries(rows, "weakestSkill", 3);
  const weakCognitive = getReportEntries(rows, "weakestCognitive", 2);
  const firstSkill = weakSkills[0]?.label || "habilidade crítica principal";
  const firstCognitive = weakCognitive[0]?.label || "dimensão cognitiva de maior dificuldade";
  const actions = [
    `Planejar uma sequência de retomada para ${firstSkill}, com atividade guiada, prática curta e verificação rápida.`,
    `Organizar grupos flexíveis por faixa de desempenho: abaixo de 50%, entre 50% e 85%, e acima de 85%.`,
    `Criar intervenções específicas para ${firstCognitive}, usando questões-modelo e explicitação do raciocínio esperado.`,
    "Comparar este relatório com observações de sala, produções escritas e resultados bimestrais antes de fechar encaminhamentos.",
    "Reaplicar um diagnóstico curto após as intervenções para medir evolução e registrar evidências para reunião pedagógica.",
  ];
  return `<ol>${actions.map((action) => `<li>${escapeReportHtml(action)}</li>`).join("")}</ol>`;
}

function getReportRiskBand(accuracy) {
  if (accuracy < 50) return { label: "Atenção imediata", className: "risk-high" };
  if (accuracy < 70) return { label: "Acompanhamento", className: "risk-watch" };
  if (accuracy <= 85) return { label: "Em consolidação", className: "risk-steady" };
  return { label: "Avançado", className: "risk-strong" };
}

function getReportLevelDescription(level) {
  const descriptions = {
    1: { title: "Iniciante", text: "domínio inicial; precisa retomada." },
    2: { title: "Fundamental", text: "compreende parcialmente; precisa consolidar." },
    3: { title: "Intermediário", text: "aplica com autonomia em situações comuns." },
    4: { title: "Avançado", text: "domina e aplica em situações mais complexas." },
  };
  return descriptions[level] || { title: "Sem nível", text: "sem classificação suficiente." };
}

function renderReportLevelLegend() {
  const levels = [1, 2, 3, 4];
  return `<section><h2>Legenda dos níveis</h2><div class="level-legend">${levels.map((level) => {
    const description = getReportLevelDescription(level);
    return `<div><strong>Nível ${level} — ${escapeReportHtml(description.title)}</strong><span>${escapeReportHtml(description.text)}</span></div>`;
  }).join("")}</div></section>`;
}

function getReportLevelText(row) {
  return row.levelNumber > 0 ? `Nível ${row.levelNumber}` : (row.level || "Sem nível");
}

function getReportAdjustedWeakSkill(row) {
  const strongest = normalizeText(row.strongestSkill || "");
  const weakest = normalizeText(row.weakestSkill || "");
  if (strongest && weakest && strongest === weakest) {
    return {
      label: "Sem fragilidade distinta registrada",
      note: `A mesma habilidade aparece como ponto forte e ponto de atenção; recomenda-se observar os itens respondidos antes de definir intervenção em ${row.weakestSkill}.`,
    };
  }
  return { label: row.weakestSkill || "-", note: "" };
}

function renderReportExecutiveSummary(rows, avgLevel, avgAccuracy, lowPerformance) {
  const criticalSkills = getReportEntries(rows, "weakestSkill", 3).map((item) => item.label);
  const weakCognitive = getReportEntries(rows, "weakestCognitive", 2).map((item) => item.label);
  const focusText = criticalSkills.length ? criticalSkills.join(", ") : "habilidades avaliadas";
  const cognitiveText = weakCognitive.length ? weakCognitive.join(" e ") : "dimensões cognitivas avaliadas";
  const levelText = avgLevel === "-" ? "sem nível médio calculado" : `nível médio ${avgLevel}`;
  return `<section class="executive"><h2>Resumo executivo</h2><p>O recorte analisado reúne <strong>${rows.length} registro(s)</strong>, com <strong>${levelText}</strong> e <strong>${avgAccuracy}% de aproveitamento médio</strong>. A prioridade pedagógica indicada é reforçar <strong>${escapeReportHtml(focusText)}</strong>, com atenção especial a <strong>${escapeReportHtml(cognitiveText)}</strong>.</p><p><strong>${lowPerformance} estudante(s)</strong> aparecem abaixo de 50% e devem ser acompanhados de forma mais próxima no próximo ciclo de intervenção.</p></section>`;
}

function renderReportRiskSummary(rows) {
  if (!rows.length) return "<section><h2>Classificação de risco pedagógico</h2><p class='muted'>Sem registros para classificar.</p></section>";
  const bands = [
    { label: "Atenção imediata", count: rows.filter((row) => row.accuracy < 50).length, className: "risk-high" },
    { label: "Acompanhamento", count: rows.filter((row) => row.accuracy >= 50 && row.accuracy < 70).length, className: "risk-watch" },
    { label: "Em consolidação", count: rows.filter((row) => row.accuracy >= 70 && row.accuracy <= 85).length, className: "risk-steady" },
    { label: "Avançado", count: rows.filter((row) => row.accuracy > 85).length, className: "risk-strong" },
  ];
  return `<section><h2>Classificação de risco pedagógico</h2><div class="risk-grid">${bands.map((band) => `<div class="risk-card ${band.className}"><strong>${band.count}</strong><span>${escapeReportHtml(band.label)}</span></div>`).join("")}</div><p class="muted">Use esta leitura para formar grupos flexíveis e definir a intensidade do acompanhamento.</p></section>`;
}

function renderReportPriorityStudents(rows) {
  const priorityRows = rows
    .filter((row) => row.accuracy < 70)
    .sort((left, right) => left.accuracy - right.accuracy)
    .slice(0, 8);
  if (!priorityRows.length) return "<section><h2>Alunos prioritários</h2><p class='muted'>Nenhum aluno abaixo de 70% no recorte selecionado.</p></section>";
  const items = priorityRows.map((row) => {
    const band = getReportRiskBand(row.accuracy);
    const weakSkill = getReportAdjustedWeakSkill(row);
    return `<tr><td class="name-cell">${escapeReportHtml(formatReportStudentName(row.studentName))}</td><td>${escapeReportHtml(row.studentClassroom)}</td><td><span class="risk-pill ${band.className}">${escapeReportHtml(band.label)}</span></td><td><strong>${row.accuracy}%</strong></td><td class="wrap-cell">${escapeReportHtml(weakSkill.label)}</td><td class="wrap-cell">${escapeReportHtml(row.weakestCognitive)}</td></tr>`;
  }).join("");
  return `<section><h2>Alunos prioritários</h2><table class="priority-table"><thead><tr><th>Aluno</th><th>Turma</th><th>Risco</th><th>Taxa</th><th>Habilidade crítica</th><th>Dificuldade cognitiva</th></tr></thead><tbody>${items}</tbody></table></section>`;
}

function getReportSkillIntervention(skill) {
  const normalized = normalizeText(skill);
  if (normalized.includes("voz verbal")) {
    return "Exercícios de identificação da voz verbal, transformação de frases entre voz ativa e passiva e aplicação contextual em pequenos enunciados.";
  }
  if (normalized.includes("relacoes de sentido")) {
    return "Leitura de pequenos textos com foco em conectivos, inferências, relações de causa e consequência e justificativa da escolha feita.";
  }
  if (normalized.includes("proposta de intervencao")) {
    return "Produção orientada usando a estrutura agente + ação + meio + finalidade, com análise de modelos e reescrita acompanhada.";
  }
  if (normalized.includes("coesao textual")) {
    return "Atividades de uso de conectores, retomada pronominal, progressão de ideias e organização entre períodos.";
  }
  if (normalized.includes("argumentacao")) {
    return "Construção de tese, seleção de argumentos, uso de evidências e comparação entre respostas fracas e fortes.";
  }
  return "Atividade diagnóstica curta, explicitação do conceito, prática guiada e nova verificação com questão semelhante.";
}

function getReportSkillVerification(skill) {
  const normalized = normalizeText(skill);
  if (normalized.includes("proposta de intervencao")) return "Reescrita de uma proposta completa com agente, ação, meio e finalidade destacados.";
  if (normalized.includes("relacoes de sentido")) return "Questões curtas de leitura com justificativa da relação lógica identificada.";
  if (normalized.includes("voz verbal")) return "Transformação contextualizada de frases e identificação da voz verbal em texto.";
  if (normalized.includes("coesao textual")) return "Parágrafo revisado com conectores e retomadas pronominais marcadas.";
  return "Mini diagnóstico focado na habilidade trabalhada.";
}

function renderReportInterventionPlan(rows) {
  const weakSkills = getReportEntries(rows, "weakestSkill", 4);
  if (!weakSkills.length) return "<section><h2>Plano de intervenção por habilidade</h2><p class='muted'>Sem habilidades críticas suficientes para montar plano.</p></section>";
  const items = weakSkills.map((item) => `<tr><td class="wrap-cell"><strong>${escapeReportHtml(item.label)}</strong><br>${item.count} ocorrência(s)</td><td class="wrap-cell">${escapeReportHtml(getReportSkillIntervention(item.label))}</td><td>2 semanas</td><td class="wrap-cell">${escapeReportHtml(getReportSkillVerification(item.label))}</td></tr>`).join("");
  return `<section><h2>Plano de intervenção por habilidade</h2><table><thead><tr><th>Prioridade</th><th>Ação sugerida</th><th>Prazo</th><th>Como verificar</th></tr></thead><tbody>${items}</tbody></table></section>`;
}

function renderReportIndividualTables(rows) {
  const summaryRows = rows.map((row) => {
    const band = getReportRiskBand(row.accuracy);
    return `<tr><td class="name-cell">${escapeReportHtml(formatReportStudentName(row.studentName))}</td><td>${escapeReportHtml(getReportLevelText(row))}</td><td><strong>${row.accuracy}%</strong></td><td><span class="risk-pill ${band.className}">${escapeReportHtml(band.label)}</span></td></tr>`;
  }).join("") || "<tr><td colspan='4'>Nenhum resultado no recorte atual.</td></tr>";
  const pedagogicalRows = rows.map((row) => {
    const weakSkill = getReportAdjustedWeakSkill(row);
    const note = weakSkill.note ? `<br><span class="cell-note">${escapeReportHtml(weakSkill.note)}</span>` : "";
    return `<tr><td class="name-cell">${escapeReportHtml(formatReportStudentName(row.studentName))}</td><td class="wrap-cell">${escapeReportHtml(row.strongestSkill)}</td><td class="wrap-cell">${escapeReportHtml(weakSkill.label)}${note}</td><td class="wrap-cell">${escapeReportHtml(row.weakestCognitive)}</td></tr>`;
  }).join("") || "<tr><td colspan='4'>Nenhum resultado no recorte atual.</td></tr>";
  return `<section><h2>Resultados individuais — resumo</h2><table class="summary-table"><thead><tr><th>Aluno</th><th>Nível</th><th>Taxa</th><th>Risco</th></tr></thead><tbody>${summaryRows}</tbody></table></section><section><h2>Resultados individuais — leitura pedagógica</h2><table class="pedagogical-table"><thead><tr><th>Aluno</th><th>Ponto forte</th><th>A reforçar</th><th>Dificuldade cognitiva</th></tr></thead><tbody>${pedagogicalRows}</tbody></table></section>`;
}

function buildDashboardReportHtml(rows, filterSummary = getDashboardFilterSummary(), contentOptions = { includeTable: true, includeDiscursives: true }) {
  const total = rows.length;
  const avgAccuracy = total ? Math.round(rows.reduce((sum, row) => sum + row.accuracy, 0) / total) : 0;
  const levelRows = rows.filter((row) => row.levelNumber > 0);
  const avgLevel = levelRows.length ? (levelRows.reduce((sum, row) => sum + row.levelNumber, 0) / levelRows.length).toFixed(1) : "-";
  const levelCounts = [1, 2, 3, 4].map((level) => ({ level, count: rows.filter((row) => row.levelNumber === level).length }));
  const performanceBands = getReportPerformanceBands(rows);
  const lowPerformance = performanceBands[0].count;
  const criticalSkills = getReportEntries(rows, "weakestSkill", 5);
  const filters = filterSummary.map((filter) => `<span>${escapeReportHtml(filter)}</span>`).join("");
  const tableSection = contentOptions.includeTable
    ? renderReportIndividualTables(rows)
    : "";
  const discursives = rows.filter((row) => row.discursiveAnswer && row.discursiveAnswer !== "-").map((row) => `<article><h4>${escapeReportHtml(formatReportStudentName(row.studentName))} · ${escapeReportHtml(row.subject)}</h4><p><strong>Questão:</strong> ${escapeReportHtml(row.discursiveQuestion)}</p><p><strong>Resposta:</strong> ${escapeReportHtml(row.discursiveAnswer)}</p><p><strong>Habilidade:</strong> ${escapeReportHtml(row.discursiveSkill)} · <strong>Cognição:</strong> ${escapeReportHtml(row.discursiveCognitive)}</p></article>`).join("") || "<p>Não há respostas dissertativas registradas neste recorte.</p>";
  const discursiveSection = contentOptions.includeDiscursives ? `<section><h2>Respostas dissertativas</h2>${discursives}</section>` : "";
  const generatedAt = new Intl.DateTimeFormat("pt-BR", { dateStyle: "long", timeStyle: "short" }).format(new Date());
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Relatório Smart Study</title><style>
    @page { size: A4; margin: 14mm; }
    * { box-sizing: border-box; } body { margin: 0; color: #0f172a; font-family: Arial, sans-serif; font-size: 10.5px; line-height: 1.45; }
    h1,h2,h3,h4,p { margin-top: 0; } h1 { font-size: 24px; margin-bottom: 2px; color:#0f172a; } h2 { font-size: 15px; margin-bottom: 8px; color:#111827; } h3 { font-size: 12px; margin-bottom: 6px; color:#1e293b; }
    header { border-bottom: 3px solid #2563eb; display: flex; justify-content: space-between; gap: 16px; margin-bottom: 12px; padding-bottom: 10px; }
    .muted { color: #475569; } .filters { display: flex; flex-wrap: wrap; gap: 6px; margin: 8px 0 12px; } .filters span { border: 1px solid #cbd5e1; border-radius: 999px; padding: 4px 8px; background:#f8fafc; }
    .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 12px; } .metric, section { border: 1px solid #dbe3ee; border-radius: 10px; padding: 10px; break-inside: avoid; background:#ffffff; }
    .metric { background: linear-gradient(180deg,#eff6ff,#ffffff); } .metric b { display: block; font-size: 19px; color:#0f172a; } .two { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px; } .three { display:grid; grid-template-columns: 1fr 1fr 1fr; gap:8px; margin-bottom:12px; }
    .executive { background:#f8fafc; border-color:#bfdbfe; border-left:4px solid #2563eb; margin-bottom:12px; } .executive p { margin-bottom:5px; }
    ul,ol { margin: 0; padding-left: 17px; } .rank { list-style: none; padding: 0; } .rank li { border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; gap: 8px; padding: 4px 0; }
    .chart-bars { display:grid; gap:6px; } .chart-row { display:grid; grid-template-columns: minmax(70px, 1fr) 2fr 32px; gap:7px; align-items:center; } .track { background:#e2e8f0; border-radius:999px; height:10px; overflow:hidden; } .track i { display:block; height:100%; border-radius:999px; background:#2563eb; }
    .levels .chart-row:nth-child(1) i { background:#ef4444; } .levels .chart-row:nth-child(2) i { background:#f59e0b; } .levels .chart-row:nth-child(3) i { background:#3b82f6; } .levels .chart-row:nth-child(4) i { background:#22c55e; }
    .performance-bars { display:grid; gap:8px; } .performance-row { display:grid; grid-template-columns: 1.1fr 1.4fr; gap:8px; align-items:center; } .performance-row strong { display:block; color:#0f172a; } .performance-row span { color:#475569; font-size:9px; } .performance-row.low i { background:#ef4444; } .performance-row.middle i { background:#f59e0b; } .performance-row.high i { background:#16a34a; }
    .critical .track i { background:#dc2626; } .cognitive-compare { display:grid; gap:6px; } .compare-row { display:grid; grid-template-columns: 82px 1fr 22px 1fr 22px; gap:6px; align-items:center; } .compare-track { background:#e2e8f0; height:9px; border-radius:999px; overflow:hidden; } .compare-track i { display:block; height:100%; } .compare-track .strong { background:#2563eb; } .compare-track .weak { background:#f97316; } .compare-legend { color:#475569; font-size:9.5px; } .compare-legend span { display:inline-block; width:10px; height:10px; border-radius:99px; margin:0 4px 0 8px; vertical-align:-1px; } .compare-legend .strong { background:#2563eb; } .compare-legend .weak { background:#f97316; }
    .risk-grid { display:grid; grid-template-columns: repeat(4, 1fr); gap:7px; margin-bottom:7px; } .risk-card { border:1px solid #dbe3ee; border-radius:8px; padding:8px; background:#f8fafc; } .risk-card strong { display:block; font-size:18px; color:#0f172a; } .risk-card span { color:#475569; } .risk-high { background:#fef2f2 !important; border-color:#fecaca !important; color:#991b1b; } .risk-watch { background:#fffbeb !important; border-color:#fde68a !important; color:#92400e; } .risk-steady { background:#eff6ff !important; border-color:#bfdbfe !important; color:#1d4ed8; } .risk-strong { background:#f0fdf4 !important; border-color:#bbf7d0 !important; color:#166534; } .risk-pill { border-radius:999px; display:inline-block; font-size:8.3px; font-weight:700; padding:3px 6px; white-space:nowrap; }
    .level-legend { display:grid; grid-template-columns: repeat(2, 1fr); gap:7px; } .level-legend div { border:1px solid #dbe3ee; border-radius:8px; padding:7px; background:#f8fafc; } .level-legend strong { display:block; margin-bottom:2px; color:#0f172a; } .level-legend span, .cell-note { color:#64748b; font-size:8.2px; }
    table { border-collapse: collapse; width: 100%; font-size: 8.8px; table-layout: fixed; } th,td { border-bottom: 1px solid #e2e8f0; padding: 5px 4px; text-align: left; vertical-align: top; overflow-wrap: normal; word-break: normal; hyphens: none; } th { background: #f8fafc; text-transform: uppercase; color: #475569; } .name-cell { font-weight:700; color:#111827; } .wrap-cell { line-height:1.35; overflow-wrap: break-word; } .summary-table th:nth-child(1), .summary-table td:nth-child(1) { width:46%; } .summary-table th:nth-child(2), .summary-table td:nth-child(2) { width:17%; } .summary-table th:nth-child(3), .summary-table td:nth-child(3) { width:12%; } .summary-table th:nth-child(4), .summary-table td:nth-child(4) { width:25%; } .pedagogical-table th:nth-child(1), .pedagogical-table td:nth-child(1) { width:34%; }
    article { border-top: 1px solid #e2e8f0; padding-top: 7px; margin-top: 7px; break-inside: avoid; } article h4 { margin-bottom: 4px; } .note { border-left: 3px solid #2563eb; background: #eff6ff; padding: 8px; margin-bottom: 12px; } .conclusion { background:#f0fdf4; border-color:#86efac; } .actions { background:#fff7ed; border-color:#fed7aa; }
  </style></head><body><header><div><h1>Smart Study</h1><p class="muted">Relatório pedagógico de nivelamento</p></div><p class="muted">Gerado em ${escapeReportHtml(generatedAt)}<br>Relatório gerado a partir dos filtros selecionados no sistema.</p></header><div class="filters">${filters}</div><div class="grid"><div class="metric">Registros<b>${total}</b></div><div class="metric">Nível médio<b>${avgLevel === "-" ? "-" : `Nível ${avgLevel}`}</b></div><div class="metric">Taxa média<b>${avgAccuracy}%</b></div><div class="metric">Baixo desempenho<b>${lowPerformance}</b></div></div>${renderReportExecutiveSummary(rows, avgLevel, avgAccuracy, lowPerformance)}<p class="note">${escapeReportHtml(getReportRecommendation(rows))}</p><div class="two"><section><h2>Distribuição por nível</h2>${renderReportBars(levelCounts.map(({ level, count }) => ({ label: `Nível ${level}`, count })), total, "levels")}</section><section><h2>Faixas de desempenho</h2>${renderReportPerformanceBars(performanceBands, total)}</section></div>${renderReportLevelLegend()}<div class="two"><section><h2>Ranking de habilidades críticas</h2>${renderReportBars(criticalSkills, total, "critical")}</section><section><h2>Domínio x dificuldade cognitiva</h2>${renderReportCognitiveComparison(rows)}</section></div>${renderReportRiskSummary(rows)}${renderReportPriorityStudents(rows)}${renderReportInterventionPlan(rows)}<section><h2>Leitura pedagógica</h2><div class="two"><div><h3>Fortes</h3><ul class="rank">${renderReportValueList(rows, "strongestSkill")}</ul></div><div><h3>A reforçar</h3><ul class="rank">${renderReportValueList(rows, "weakestSkill")}</ul></div></div><div class="two"><div><h3>Domínio cognitivo</h3><ul class="rank">${renderReportValueList(rows, "strongestCognitive")}</ul></div><div><h3>Dificuldade cognitiva</h3><ul class="rank">${renderReportValueList(rows, "weakestCognitive")}</ul></div></div></section>${tableSection}${discursiveSection}<section class="conclusion"><h2>Conclusão institucional</h2><p>${escapeReportHtml(getReportInstitutionalConclusion(rows, avgAccuracy, lowPerformance))}</p><p>Este relatório é um diagnóstico inicial. Os dados devem ser interpretados junto com a observação pedagógica do professor, o contexto da turma e outras evidências de aprendizagem.</p></section><section class="actions"><h2>Ações recomendadas ao professor</h2>${renderReportTeacherActions(rows)}</section></body></html>`;
}

function generateDashboardPdfReport(rows, filterSummary, contentOptions) {
  document.getElementById("dashboard-report-frame")?.remove();

  const reportFrame = document.createElement("iframe");
  reportFrame.id = "dashboard-report-frame";
  reportFrame.title = "Relatório Smart Study";
  reportFrame.style.position = "fixed";
  reportFrame.style.width = "1px";
  reportFrame.style.height = "1px";
  reportFrame.style.right = "0";
  reportFrame.style.bottom = "0";
  reportFrame.style.border = "0";
  reportFrame.style.opacity = "0";
  document.body.appendChild(reportFrame);

  reportFrame.addEventListener("load", () => {
    if (!reportFrame.contentWindow) {
      if (dashboardStatusLabelEl) dashboardStatusLabelEl.textContent = "Não foi possível preparar o PDF";
      reportFrame.remove();
      return;
    }

    setTimeout(() => {
      reportFrame.contentWindow.focus();
      reportFrame.contentWindow.print();
      if (dashboardStatusLabelEl) dashboardStatusLabelEl.textContent = "Relatório pronto para salvar em PDF";
    }, 180);
  }, { once: true });
  reportFrame.srcdoc = buildDashboardReportHtml(rows, filterSummary, contentOptions);
}

function renderDashboardViews() {
  const rows = getFilteredDashboardRows();
  renderDashboardMetrics(rows);
  renderDashboardCognitive(rows);
  renderDashboardAlerts(rows);
  renderDashboardTable(rows);
  renderDashboardLevelChart(rows);
  renderDashboardEngagement(rows);
  state.dashboardSelectedRow = rows[0] || null;
  renderDashboardDetail(state.dashboardSelectedRow);
}

async function loadDashboardData() {
  dashboardTotalStudentsEl.textContent = "...";
  dashboardTotalStudentsSubEl.textContent = "Carregando dados da planilha.";
  if (dashboardStatusLabelEl) dashboardStatusLabelEl.textContent = "Atualizando dados";
  if (refreshDashboardButton) refreshDashboardButton.disabled = true;

  try {
    const response = await fetch(DASHBOARD_SHEET_URL);
    if (!response.ok) {
      throw new Error("Não foi possível carregar a planilha.");
    }

    const rows = await response.json();
    state.dashboardRows = Array.isArray(rows) ? rows.map(normalizeDashboardRow) : [];
    populateDashboardFilters();
    renderDashboardViews();
    if (dashboardStatusLabelEl) dashboardStatusLabelEl.textContent = "Dados atualizados";
  } catch (error) {
    console.error("Erro ao carregar dados do dashboard:", error);

    dashboardTotalStudentsEl.textContent = "0";
    dashboardTotalStudentsSubEl.textContent = "Erro ao carregar planilha.";
    dashboardAverageLevelEl.textContent = "-";
    dashboardAverageLevelSubEl.textContent = "Aguardando dados.";
    dashboardAverageAccuracyEl.textContent = "0%";
    dashboardAverageAccuracySubEl.textContent = "Aguardando dados.";
    dashboardMainAlertEl.textContent = "-";
    dashboardMainAlertSubEl.textContent = "Verifique a URL da planilha.";
    dashboardLevelChartEl.replaceChildren();
    dashboardRankingListEl?.replaceChildren();
    dashboardWeekStripEl?.replaceChildren();
    dashboardStreakListEl?.replaceChildren();
    if (dashboardRankingCountEl) dashboardRankingCountEl.textContent = "0 alunos";
    if (dashboardStreakCountEl) dashboardStreakCountEl.textContent = "0 dias";
    dashboardCognitiveListEl.replaceChildren();
    dashboardAlertsEl.replaceChildren();
    dashboardTableBodyEl.replaceChildren();
    renderDashboardDetail(null);
    if (dashboardStatusLabelEl) dashboardStatusLabelEl.textContent = "Erro ao atualizar";
  } finally {
    if (refreshDashboardButton) refreshDashboardButton.disabled = false;
  }
}

function renderDashboardMetrics(rows = getFilteredDashboardRows()) {
  const total = rows.length;
  dashboardTotalStudentsEl.textContent = String(total);
  dashboardTotalStudentsSubEl.textContent = total ? `${total} registro(s) encontrados na planilha.` : "Nenhum registro disponível.";

  const levelRows = rows.filter((row) => row.levelNumber > 0);
  const avgLevel = levelRows.length ? (levelRows.reduce((sum, row) => sum + row.levelNumber, 0) / levelRows.length).toFixed(1) : "-";
  dashboardAverageLevelEl.textContent = avgLevel === "-" ? "-" : `Nível ${avgLevel}`;
  dashboardAverageLevelSubEl.textContent = total ? "Média calculada a partir dos resultados registrados." : "Aguardando dados.";

  const avgAccuracy = total ? Math.round(rows.reduce((sum, row) => sum + row.accuracy, 0) / total) : 0;
  dashboardAverageAccuracyEl.textContent = `${avgAccuracy}%`;
  dashboardAverageAccuracySubEl.textContent = total ? "Taxa média de acerto da turma." : "Aguardando dados.";

  const weakMap = {};
  rows.forEach((row) => {
    if (!row.weakestSkill || row.weakestSkill === "-") return;
    weakMap[row.weakestSkill] = (weakMap[row.weakestSkill] || 0) + 1;
  });

  const topWeak = Object.entries(weakMap).sort((a, b) => b[1] - a[1])[0];
  dashboardMainAlertEl.textContent = topWeak ? topWeak[0] : "-";
  dashboardMainAlertSubEl.textContent = topWeak ? `${topWeak[1]} aluno(s) com essa habilidade como ponto de reforço.` : "Nenhuma habilidade crítica identificada.";
}

function renderDashboardCognitive(rows = getFilteredDashboardRows()) {
  const map = {};
  rows.forEach((row) => {
    const key = row.strongestCognitive;
    if (!key || key === "-") return;
    if (!map[key]) map[key] = { total: 0, count: 0 };
    map[key].total += row.accuracy;
    map[key].count += 1;
  });

  const items = Object.entries(map)
    .map(([label, value]) => ({ label, average: Math.round(value.total / value.count) }))
    .sort((a, b) => b.average - a.average);

  if (!items.length) {
    renderDashboardEmptyList(dashboardCognitiveListEl, "Sem dados cognitivos.");
    return;
  }

  const nodes = items.map((item, index) => {
    const badgeClass = index === 0 ? "success" : item.average >= 50 ? "warning" : "danger";
    const div = document.createElement("div");
    const label = document.createElement("span");
    div.className = "dashboard-list-item";
    label.textContent = item.label;
    div.append(label, createDashboardBadge(`${item.average}%`, badgeClass));
    return div;
  });
  dashboardCognitiveListEl.replaceChildren(...nodes);
}

function getStudentEngagement(rows = getFilteredDashboardRows()) {
  const map = new Map();
  rows.forEach((row) => {
    const key = getReportStudentKey(row);
    if (!map.has(key)) {
      map.set(key, {
        key,
        studentName: row.studentName,
        studentClassroom: row.studentClassroom,
        studentShift: row.studentShift || "Não informado",
        xp: 0,
        accuracyTotal: 0,
        accuracyCount: 0,
        attempts: 0,
        subjects: new Set(),
        timestamps: [],
        dayKeys: new Set(),
      });
    }

    const entry = map.get(key);
    entry.xp += Number(row.xp) || 0;
    entry.accuracyTotal += Number(row.accuracy) || 0;
    entry.accuracyCount += 1;
    entry.attempts += 1;
    if (row.subject && row.subject !== "Sem disciplina") entry.subjects.add(row.subject);

    const timestamp = parseReportTimestamp(row.submittedAt);
    if (timestamp != null) {
      entry.timestamps.push(timestamp);
      entry.dayKeys.add(formatDashboardDayKey(new Date(timestamp)));
    }
  });

  return [...map.values()].map((entry) => {
    const latestTimestamp = entry.timestamps.length ? Math.max(...entry.timestamps) : null;
    const streak = calculateDashboardStreak(entry.dayKeys, latestTimestamp);
    return {
      ...entry,
      averageAccuracy: entry.accuracyCount ? Math.round(entry.accuracyTotal / entry.accuracyCount) : 0,
      subjectCount: entry.subjects.size,
      latestTimestamp,
      streak,
    };
  });
}

function formatDashboardDayKey(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function calculateDashboardStreak(dayKeys, latestTimestamp) {
  if (!dayKeys?.size || latestTimestamp == null) return 0;
  const cursor = new Date(latestTimestamp);
  cursor.setHours(0, 0, 0, 0);
  let streak = 0;

  while (dayKeys.has(formatDashboardDayKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

function formatDashboardLatestActivity(timestamp) {
  if (timestamp == null) return "Sem data registrada";
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short" }).format(new Date(timestamp));
}

function renderDashboardEngagement(rows = getFilteredDashboardRows()) {
  const students = getStudentEngagement(rows);
  renderDashboardRanking(students);
  renderDashboardStreak(students);
}

function renderDashboardRanking(students = []) {
  if (!dashboardRankingListEl) return;
  const ranked = [...students]
    .sort((left, right) => (right.xp - left.xp) || (right.averageAccuracy - left.averageAccuracy) || (right.attempts - left.attempts))
    .slice(0, 5);

  if (dashboardRankingCountEl) {
    dashboardRankingCountEl.textContent = students.length + " aluno" + (students.length === 1 ? "" : "s");
  }

  if (!ranked.length) {
    renderDashboardEmptyList(dashboardRankingListEl, "Sem alunos no recorte atual.");
    return;
  }

  const nodes = ranked.map((student, index) => {
    const item = document.createElement("div");
    item.className = "dashboard-ranking-item";
    const place = document.createElement("span");
    place.className = "dashboard-ranking-place";
    place.textContent = String(index + 1);

    const avatar = document.createElement("span");
    avatar.className = "dashboard-ranking-avatar";
    avatar.textContent = getStudentInitials(student.studentName);

    const info = document.createElement("div");
    info.className = "dashboard-ranking-info";
    info.append(
      createTextEl("strong", "", student.studentName),
      createTextEl("span", "", student.studentClassroom + " · " + student.studentShift + " · " + student.attempts + " registro(s) · " + student.averageAccuracy + "%")
    );

    const score = document.createElement("div");
    score.className = "dashboard-ranking-score";
    score.append(
      createTextEl("strong", "", student.xp + " XP"),
      createTextEl("span", "", student.subjectCount + " disciplina(s)")
    );

    item.append(place, avatar, info, score);
    return item;
  });

  dashboardRankingListEl.replaceChildren(...nodes);
}

function getStudentInitials(name = "") {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  const initials = parts.slice(0, 2).map((part) => part[0]).join("").toUpperCase();
  return initials || "A";
}

function renderDashboardStreak(students = []) {
  if (!dashboardStreakListEl || !dashboardWeekStripEl) return;
  const ranked = [...students]
    .sort((left, right) => (right.streak - left.streak) || (right.xp - left.xp) || (right.averageAccuracy - left.averageAccuracy))
    .slice(0, 4);
  const bestStreak = ranked[0]?.streak || 0;

  if (dashboardStreakCountEl) {
    dashboardStreakCountEl.textContent = bestStreak + " dia" + (bestStreak === 1 ? "" : "s");
  }

  const weekDays = ["S", "T", "Q", "Q", "S", "S", "D"];
  const activeCount = Math.min(bestStreak, 7);
  const dayNodes = weekDays.map((label, index) => {
    const day = document.createElement("span");
    day.className = index >= weekDays.length - activeCount ? "active" : "";
    day.textContent = label;
    return day;
  });
  dashboardWeekStripEl.replaceChildren(...dayNodes);

  if (!ranked.length) {
    renderDashboardEmptyList(dashboardStreakListEl, "Sem datas de estudo no recorte atual.");
    return;
  }

  const nodes = ranked.map((student) => {
    const item = document.createElement("div");
    item.className = "dashboard-streak-item";

    const flame = document.createElement("span");
    flame.className = student.streak > 0 ? "dashboard-streak-flame active" : "dashboard-streak-flame";
    flame.textContent = student.streak > 0 ? "●" : "○";

    const info = document.createElement("div");
    info.className = "dashboard-ranking-info";
    info.append(
      createTextEl("strong", "", student.studentName),
      createTextEl("span", "", formatDashboardLatestActivity(student.latestTimestamp) + " · " + student.attempts + " registro(s)")
    );

    const count = document.createElement("div");
    count.className = "dashboard-ranking-score";
    count.append(
      createTextEl("strong", "", student.streak + " dia" + (student.streak === 1 ? "" : "s")),
      createTextEl("span", "", student.xp + " XP")
    );

    item.append(flame, info, count);
    return item;
  });

  dashboardStreakListEl.replaceChildren(...nodes);
}


function renderDashboardAlerts(rows = getFilteredDashboardRows()) {
  const weakMap = {};
  rows.forEach((row) => {
    if (!row.weakestSkill || row.weakestSkill === "-") return;
    weakMap[row.weakestSkill] = (weakMap[row.weakestSkill] || 0) + 1;
  });

  const sortedWeak = Object.entries(weakMap).sort((a, b) => b[1] - a[1]);
  const lowPerformance = rows.filter((row) => row.accuracy < 50).length;
  const alerts = [];

  if (sortedWeak[0]) {
    alerts.push({
      icon: "⚠",
      title: `${sortedWeak[0][1]} aluno(s) com dificuldade em ${sortedWeak[0][0]}`,
      text: "Recomendado reforço com atividades orientadas por habilidade.",
    });
  }

  if (lowPerformance > 0) {
    alerts.push({
      icon: "⚠",
      title: `${lowPerformance} aluno(s) com baixo desempenho geral`,
      text: "Vale planejar acompanhamento individual ou reforço em grupo.",
    });
  }

  if (!alerts.length) {
    alerts.push({
      icon: "✓",
      title: "Sem alertas críticos",
      text: "Os dados atuais não indicam urgências pedagógicas.",
    });
  }

  const nodes = alerts.map((alert) => {
    const wrapper = document.createElement("div");
    const icon = document.createElement("div");
    const content = document.createElement("div");
    const title = document.createElement("div");
    const body = document.createElement("div");
    wrapper.className = "dashboard-alert";
    icon.textContent = alert.icon;
    title.className = "dashboard-alert-title";
    title.textContent = alert.title;
    body.className = "dashboard-alert-text";
    body.textContent = alert.text;
    content.append(title, body);
    wrapper.append(icon, content);
    return wrapper;
  });
  dashboardAlertsEl.replaceChildren(...nodes);
}

function navigateDashboardToSection(targetId, options = {}) {
  const target = targetId ? document.getElementById(targetId) : null;
  if (!target) return;

  dashboardNavItems.forEach((navItem) => {
    navItem.classList.toggle("active", navItem.dataset.target === targetId);
  });

  target.scrollIntoView({
    behavior: options.behavior || "smooth",
    block: options.block || "start",
  });
}

function renderDashboardTable(filteredRows = getFilteredDashboardRows()) {
  if (!filteredRows.length) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 6;
    td.textContent = "Nenhum resultado encontrado para os filtros selecionados.";
    tr.appendChild(td);
    dashboardTableBodyEl.replaceChildren(tr);
    return;
  }

  const rows = filteredRows.map((row, index) => {
    const tr = document.createElement("tr");
    if (state.dashboardSelectedRow === row) {
      tr.classList.add("is-selected");
    }
    const studentTd = document.createElement("td");
    const name = document.createElement("button");
    const meta = document.createElement("span");
    name.className = "dashboard-student-name dashboard-student-button";
    name.type = "button";
    name.dataset.index = String(index);
    name.textContent = row.studentName;
    meta.className = "dashboard-student-meta";
    meta.textContent = `Taxa de acerto: ${row.accuracy}%`;
    studentTd.append(name, meta);

    [studentTd, `${row.studentClassroom} · ${row.studentShift}`, row.subject, row.level, `${row.xp} XP`].forEach((value) => {
      if (value instanceof HTMLElement) {
        tr.appendChild(value);
        return;
      }
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });

    const statusTd = document.createElement("td");
    statusTd.appendChild(createDashboardBadge("Registrado", "success"));
    tr.appendChild(statusTd);
    return tr;
  });

  dashboardTableBodyEl.replaceChildren(...rows);
  dashboardTableBodyEl.querySelectorAll(".dashboard-student-name").forEach((node) => {
    node.addEventListener("click", () => {
      const index = Number(node.dataset.index);
      state.dashboardSelectedRow = filteredRows[index];
      renderDashboardDetail(state.dashboardSelectedRow);
      renderDashboardTable(filteredRows);
      navigateDashboardToSection("dashboard-detail-section");
    });
  });
}

function updateJourneyEntryPoint(row) {
  if (!openJourneyGeneratorButton || !dashboardInterventionCopyEl) return;
  if (!row) {
    openJourneyGeneratorButton.disabled = true;
    dashboardInterventionCopyEl.textContent = "Selecione um aluno para criar uma trilha baseada no diagnóstico e em um PDF.";
    return;
  }

  openJourneyGeneratorButton.disabled = false;
  const skill = row.weakestSkill && row.weakestSkill !== "-" ? row.weakestSkill : "habilidade em reforço";
  const cognitive = row.weakestCognitive && row.weakestCognitive !== "-" ? row.weakestCognitive : "dificuldade cognitiva identificada";
  dashboardInterventionCopyEl.textContent = "Gerar uma jornada para " + row.studentName + ", priorizando " + skill.toLowerCase() + " e " + cognitive.toLowerCase() + ".";
}

function renderDashboardDetail(row) {
  updateJourneyEntryPoint(row);
  if (!row) {
    dashboardDetailNameEl.textContent = "-";
    dashboardDetailMetaEl.textContent = "Selecione um aluno.";
    dashboardDetailLevelEl.textContent = "-";
    dashboardDetailLevelSubEl.textContent = "Sem dado selecionado.";
    dashboardDetailStrongEl.textContent = "-";
    dashboardDetailStrongSubEl.textContent = "Aguardando seleção.";
    dashboardDetailWeakEl.textContent = "-";
    dashboardDetailWeakSubEl.textContent = "Aguardando seleção.";
    dashboardDetailDiscursiveSkillEl.textContent = "-";
    dashboardDetailDiscursiveQuestionEl.textContent = "Sem questão registrada.";
    dashboardDetailDiscursiveCognitiveEl.textContent = "-";
    dashboardDetailDiscursiveAnswerEl.textContent = "Sem resposta registrada.";
    return;
  }

  dashboardDetailNameEl.textContent = row.studentName;
  dashboardDetailMetaEl.textContent = `${row.studentClassroom} • ${row.studentShift} • ${row.subject} • ${row.xp} XP`;
  dashboardDetailLevelEl.textContent = row.level;
  dashboardDetailLevelSubEl.textContent = `Taxa de acerto: ${row.accuracy}%`;
  dashboardDetailStrongEl.textContent = row.strongestSkill;
  dashboardDetailStrongSubEl.textContent = `Maior domínio cognitivo: ${row.strongestCognitive}.`;
  dashboardDetailWeakEl.textContent = row.weakestSkill;
  dashboardDetailWeakSubEl.textContent = `Maior dificuldade cognitiva: ${row.weakestCognitive}.`;
  dashboardDetailDiscursiveSkillEl.textContent = row.discursiveSkill || "-";
  dashboardDetailDiscursiveQuestionEl.textContent = row.discursiveQuestion && row.discursiveQuestion !== "-"
    ? row.discursiveQuestion
    : "Sem questão registrada.";
  dashboardDetailDiscursiveCognitiveEl.textContent = row.discursiveCognitive && row.discursiveCognitive !== "-"
    ? `Nível cognitivo: ${row.discursiveCognitive}`
    : "-";
  dashboardDetailDiscursiveAnswerEl.textContent = row.discursiveAnswer && row.discursiveAnswer !== "-"
    ? row.discursiveAnswer
    : "Sem resposta registrada.";
}

function setJourneyStatus(status, message) {
  if (!journeyStatusEl) return;
  journeyStatusEl.className = status ? "journey-status " + status : "journey-status";
  journeyStatusEl.textContent = message;
}

function setJourneyLoading(isLoading) {
  if (journeySubmitButton) {
    journeySubmitButton.disabled = isLoading;
    journeySubmitButton.textContent = isLoading ? "Gerando jornada..." : "Gerar jornada";
  }
  if (journeyGeneratorFormEl) {
    journeyGeneratorFormEl.classList.toggle("is-loading", isLoading);
  }
}

function createJourneyPayload(row) {
  return {
    studentName: row.studentName,
    studentClassroom: row.studentClassroom,
    studentShift: row.studentShift,
    subject: row.subject,
    level: row.level,
    accuracy: row.accuracy,
    xp: row.xp,
    weakestSkill: row.weakestSkill,
    weakestCognitive: row.weakestCognitive,
    strongestSkill: row.strongestSkill,
    strongestCognitive: row.strongestCognitive,
    discursiveQuestion: row.discursiveQuestion,
    discursiveAnswer: row.discursiveAnswer,
  };
}

function getJourneyGenerationErrorMessage(error) {
  const rawMessage = error?.message || "";
  if (window.location.protocol === "file:") {
    return "Abra o Smart Study pelo endereço http://localhost:8768/. A geração com PDF não funciona abrindo o index.html direto nos arquivos.";
  }
  if (/load failed|failed to fetch|networkerror|fetch/i.test(rawMessage)) {
    return "Não consegui falar com o servidor local. Confira se o terminal está rodando o Smart Study em http://localhost:8768/ e se o Ollama está aberto.";
  }
  return rawMessage || "Falha ao gerar a jornada.";
}

function resetJourneyModalOutput() {
  state.lastGeneratedJourney = null;
  if (journeyGeneratedOutputEl) {
    journeyGeneratedOutputEl.hidden = true;
    journeyGeneratedOutputEl.replaceChildren();
  }
}

function openJourneyGeneratorModal() {
  const row = state.dashboardSelectedRow;
  if (!row) {
    setJourneyStatus("error", "Selecione um aluno na tabela antes de criar a trilha.");
    return;
  }

  resetJourneyModalOutput();
  journeyGeneratorFormEl?.reset();
  if (journeyFileNameEl) {
    journeyFileNameEl.textContent = "Escolha o arquivo que servirá de base para a trilha.";
  }

  journeyStudentNameEl.textContent = row.studentName;
  journeyStudentMetaEl.textContent = row.studentClassroom + " • " + row.studentShift + " • " + row.subject + " • " + row.level;
  journeyFocusSkillEl.textContent = row.weakestSkill && row.weakestSkill !== "-" ? row.weakestSkill : "Habilidade a reforçar";
  journeyFocusCognitiveEl.textContent = row.weakestCognitive && row.weakestCognitive !== "-"
    ? "Maior dificuldade cognitiva: " + row.weakestCognitive
    : "Maior dificuldade cognitiva não informada.";
  if (journeyObjectiveInput) {
    journeyObjectiveInput.value = "Criar uma jornada de reforço para " + (row.weakestSkill || "a habilidade indicada") + ", com explicações curtas, prática guiada e testes progressivos.";
  }
  if (journeyDurationInput) journeyDurationInput.value = "padrao";
  if (journeyToneInput) journeyToneInput.value = "acolhedor";
  setJourneyStatus("idle", "Envie um PDF para gerar a jornada completa.");
  setJourneyLoading(false);
  setTeacherToolVisibility(journeyGeneratorModalEl, true);
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    journeyGeneratorModalEl?.scrollTo({ top: 0, behavior: "instant" });
    journeyGeneratorModalEl?.querySelector(".guide-modal-dialog")?.scrollTo({ top: 0, behavior: "instant" });
  });
}

function closeJourneyGeneratorModal() {
  setTeacherToolVisibility(journeyGeneratorModalEl, false);
  setJourneyLoading(false);
}

function createTextEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  el.textContent = text || "";
  return el;
}

function normalizeJourneyListItems(items = []) {
  if (Array.isArray(items)) return items;
  if (typeof items === "string") return items.split(/\n+/).map((item) => item.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
  if (items && typeof items === "object") {
    const candidate = items.items || items.steps || items.guidance || items.list || items.values;
    if (candidate) return normalizeJourneyListItems(candidate);
    return Object.values(items).filter((value) => typeof value === "string");
  }
  return [];
}

function expandJourneyOptionLabel(value) {
  const text = String(value ?? "").trim();
  const normalized = text.toUpperCase().replace(/[.\s-]/g, "");
  const labels = {
    VA: "Voz ativa",
    VPA: "Voz passiva analítica",
    VPS: "Voz passiva sintética",
    VR: "Voz reflexiva",
  };
  return labels[normalized] || text;
}

function isUsefulJourneyText(value) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  return Boolean(text && text !== "-" && !/^conte[uú]do$/i.test(text));
}

function renderJourneyList(items = [], className = "journey-list") {
  const list = document.createElement("ul");
  list.className = className;
  normalizeJourneyListItems(items).filter(Boolean).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = typeof item === "string" ? item : JSON.stringify(item);
    list.appendChild(li);
  });
  return list;
}

function appendJourneyParagraphs(parent, text) {
  const raw = String(text || "").trim();
  const parts = raw.includes("\n")
    ? raw.split(/\n+/)
    : raw.split(/(?<=[.!?])\s+(?=[A-ZÁÀÂÃÉÊÍÓÔÕÚÇ])/).reduce((groups, sentence, index) => {
        const groupIndex = Math.floor(index / 3);
        groups[groupIndex] = groups[groupIndex] ? groups[groupIndex] + " " + sentence : sentence;
        return groups;
      }, []);
  parts.map((part) => part.trim()).filter(Boolean).forEach((part) => {
    parent.appendChild(createTextEl("p", "", part));
  });
}

function renderLessonPracticeQuestion(question, questionIndex, lessonIndex = 0) {
  const normalizedQuestion = question && typeof question === "object" ? question : { prompt: String(question || "Questão") };
  const optionItems = normalizeJourneyListItems(normalizedQuestion.options || normalizedQuestion.alternatives || normalizedQuestion.choices);
  const answerText = normalizedQuestion.answer || normalizedQuestion.correctAnswer || normalizedQuestion.correct || "";
  const card = document.createElement("div");
  card.className = "journey-practice-question";

  const title = document.createElement("div");
  title.className = "journey-practice-question-title";
  title.append(
    createTextEl("span", "journey-step-pill", String(questionIndex + 1)),
    createTextEl("strong", "", normalizedQuestion.prompt || normalizedQuestion.question || "Questão")
  );
  card.appendChild(title);

  const feedback = document.createElement("div");
  feedback.className = "journey-step-feedback";
  feedback.hidden = true;

  const options = document.createElement("div");
  options.className = "journey-step-options";
  optionItems.forEach((option, optionIndex) => {
    const optionText = expandJourneyOptionLabel(typeof option === "string" ? option : (option.label || option.text || option.value || JSON.stringify(option)));
    const button = document.createElement("button");
    button.type = "button";
    button.className = "journey-step-option journey-practice-option";
    button.dataset.option = optionText;
    button.innerHTML = "<span>" + String.fromCharCode(65 + optionIndex) + "</span>" + escapeHtml(optionText);
    button.addEventListener("click", () => {
      const isCorrect = normalizeText(optionText) === normalizeText(answerText);
      options.querySelectorAll(".journey-step-option").forEach((node) => {
        node.disabled = true;
        if (normalizeText(node.dataset.option || "") === normalizeText(answerText)) {
          node.classList.add("is-correct");
        }
      });
      button.classList.add(isCorrect ? "is-correct" : "is-wrong");
      feedback.hidden = false;
      feedback.className = "journey-step-feedback " + (isCorrect ? "success" : "error");
      feedback.textContent = (isCorrect ? "Correto. " : "Ainda não. ") + (isCorrect
        ? (normalizedQuestion.successFeedback || "Resposta correta.")
        : (normalizedQuestion.errorFeedback || "Revise a dica e tente novamente."));
      recordStudentJourneyAnswer(lessonIndex, questionIndex, isCorrect, optionText, answerText);
    });
    options.appendChild(button);
  });

  const actions = document.createElement("div");
  actions.className = "journey-step-actions";
  if (normalizedQuestion.hint) {
    const hintButton = document.createElement("button");
    hintButton.type = "button";
    hintButton.className = "journey-mini-button";
    hintButton.textContent = "Ver dica";
    hintButton.addEventListener("click", () => {
      feedback.hidden = false;
      feedback.className = "journey-step-feedback hint";
      feedback.textContent = normalizedQuestion.hint;
    });
    actions.appendChild(hintButton);
  }

  const answerButton = document.createElement("button");
  answerButton.type = "button";
  answerButton.className = "journey-mini-button";
  answerButton.textContent = "Ver explicação";
  answerButton.addEventListener("click", () => {
    feedback.hidden = false;
    feedback.className = "journey-step-feedback answer";
    feedback.textContent = "Resposta: " + (answerText || "-") + (normalizedQuestion.explanation ? " - " + normalizedQuestion.explanation : "");
  });
  actions.appendChild(answerButton);

  card.append(options, actions, feedback);
  return card;
}

function renderJourneyLessons(lessons = [], journey = {}) {
  const wrap = document.createElement("div");
  wrap.className = "journey-lessons";

  const track = document.createElement("aside");
  track.className = "journey-lesson-track";
  track.append(
    createTextEl("span", "dashboard-detail-title", "Aulas da trilha"),
    createTextEl("strong", "", journey.title || "Trilha personalizada"),
    createTextEl("p", "", (lessons.length || 0) + " aulas · meta: " + (journey.approvalCriteria || "4/5 em cada prática"))
  );
  const trackList = document.createElement("div");
  trackList.className = "journey-lesson-track-list";
  lessons.forEach((lesson, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "journey-lesson-track-item" + (index === 0 ? " active" : "");
    item.textContent = String(index + 1).padStart(2, "0") + " · " + (lesson.title || "Aula " + (index + 1));
    item.addEventListener("click", () => {
      document.getElementById("journey-lesson-" + index)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    trackList.appendChild(item);
  });
  track.appendChild(trackList);

  const content = document.createElement("div");
  content.className = "journey-lesson-content";

  lessons.forEach((lesson, index) => {
    const article = document.createElement("article");
    article.className = "journey-lesson-card";
    article.id = "journey-lesson-" + index;

    const header = document.createElement("div");
    header.className = "journey-mission-header";
    const titleWrap = document.createElement("div");
    titleWrap.append(
      createTextEl("span", "journey-step-index", String(index + 1).padStart(2, "0")),
      createTextEl("h4", "journey-chapter-title", lesson.title || "Aula " + (index + 1))
    );
    header.append(titleWrap, createDashboardBadge(lesson.estimatedMinutes || "12 min", "success"));
    article.append(header, createTextEl("p", "journey-chapter-objective", lesson.objective || "Objetivo da aula."));

    const blocks = document.createElement("div");
    blocks.className = "journey-lesson-blocks journey-article-blocks";
    (lesson.contentBlocks || []).filter((block) => isUsefulJourneyText(block?.body)).forEach((block, blockIndex) => {
      const section = document.createElement("section");
      section.className = "journey-lesson-block journey-article-section";
      section.appendChild(createTextEl(blockIndex === 0 ? "h3" : "h4", "", isUsefulJourneyText(block.heading) ? block.heading : "Ponto importante"));
      appendJourneyParagraphs(section, block.body || "");
      blocks.appendChild(section);
    });
    if (blocks.children.length) article.appendChild(blocks);

    const comparisonRows = (lesson.comparisonTable || []).filter((row) => isUsefulJourneyText(row?.concept) && isUsefulJourneyText(row?.focus) && isUsefulJourneyText(row?.example));
    if (comparisonRows.length) {
      const table = document.createElement("div");
      table.className = "journey-comparison-table";
      table.append(createTextEl("h5", "", "Resumo comparativo"));
      comparisonRows.forEach((row) => {
        const line = document.createElement("div");
        line.className = "journey-comparison-row";
        line.append(
          createTextEl("strong", "", row.concept),
          createTextEl("span", "", row.focus),
          createTextEl("em", "", row.example)
        );
        table.appendChild(line);
      });
      article.appendChild(table);
    }

    const confusionItems = normalizeJourneyListItems(lesson.confusionGuide || []).filter(isUsefulJourneyText);
    if (confusionItems.length) {
      const confusion = document.createElement("div");
      confusion.className = "journey-confusion-guide journey-article-confusion";
      confusion.appendChild(createTextEl("h3", "", "Como não confundir"));
      appendJourneyParagraphs(confusion, confusionItems.join(" "));
      article.appendChild(confusion);
    }

    if (lesson.quickSummary) {
      article.appendChild(createTextEl("p", "journey-quick-summary", lesson.quickSummary));
    }

    const practice = document.createElement("section");
    practice.className = "journey-practice-card";
    const practiceHeader = document.createElement("div");
    practiceHeader.className = "journey-practice-header";
    practiceHeader.append(
      createTextEl("h5", "", lesson.practice?.title || "Pratique o que aprendeu"),
      createDashboardBadge((normalizeJourneyListItems(lesson.practice?.questions || []).length || 5) + " questões · meta " + (lesson.practice?.passingScore || 4), "warning")
    );
    const progress = document.createElement("div");
    progress.className = "journey-practice-progress";
    Array.from({ length: normalizeJourneyListItems(lesson.practice?.questions || []).length || 5 }, (_, i) => {
      const bar = document.createElement("span");
      if (i === 0) bar.className = "active";
      progress.appendChild(bar);
    });
    practice.append(
      practiceHeader,
      createTextEl("p", "journey-practice-instructions", lesson.practice?.instructions || "5 questões · acerte ao menos 4 para concluir a aula"),
      progress
    );
    normalizeJourneyListItems(lesson.practice?.questions || []).forEach((question, qIndex) => {
      practice.appendChild(renderLessonPracticeQuestion(question, qIndex, index));
    });
    article.appendChild(practice);
    content.appendChild(article);
  });

  wrap.append(track, content);
  return wrap;
}

function renderStudentJourneyCardDeck(lessons = [], journey = {}, journeyId = "") {
  const deck = renderJourneyLessons(lessons, journey);
  deck.classList.add("journey-card-deck");

  const track = deck.querySelector(".journey-lesson-track");
  if (track) {
    track.classList.add("journey-deck-overview");
    track.style.setProperty("--lesson-count", String(Math.max(1, lessons.length)));
    const overviewHeader = document.createElement("div");
    overviewHeader.className = "journey-deck-overview-header";
    const overviewCopy = document.createElement("div");
    overviewCopy.append(
      createTextEl("span", "journey-deck-kicker", "Trilha · " + (journey.subject || "Estudos")),
      createTextEl("h3", "", journey.title || "Trilha de aprendizagem")
    );
    overviewHeader.append(overviewCopy, createDashboardBadge("Em andamento", "info"));

    const lessonProgress = document.createElement("div");
    lessonProgress.className = "journey-deck-lesson-progress";
    lessonProgress.setAttribute("aria-label", "Progresso entre as aulas");
    lessons.forEach(() => lessonProgress.appendChild(document.createElement("span")));

    const lessonStepper = document.createElement("div");
    lessonStepper.className = "journey-deck-stepper";
    lessons.forEach((lesson, lessonIndex) => {
      const step = document.createElement("div");
      step.className = "journey-deck-step";
      step.dataset.lessonIndex = String(lessonIndex);
      const marker = createTextEl("span", "journey-deck-step-marker", String(lessonIndex + 1));
      const label = createTextEl("small", "", lesson.title || "Aula " + String(lessonIndex + 1).padStart(2, "0"));
      step.append(marker, label);
      lessonStepper.appendChild(step);
    });
    track.replaceChildren(overviewHeader, lessonProgress, lessonStepper);
  }

  const content = deck.querySelector(".journey-lesson-content");
  const cards = [];
  [...(content?.querySelectorAll(":scope > .journey-lesson-card") || [])].forEach((lessonCard, lessonIndex) => {
    const practice = lessonCard.querySelector(":scope > .journey-practice-card");
    const questions = practice ? [...practice.querySelectorAll(":scope > .journey-practice-question")] : [];
    practice?.remove();

    lessonCard.classList.add("journey-deck-card", "journey-deck-content-card");
    lessonCard.dataset.lessonIndex = String(lessonIndex);
    lessonCard.dataset.cardType = "content";
    cards.push(lessonCard);

    questions.forEach((question, questionIndex) => {
      const questionCard = document.createElement("article");
      questionCard.className = "journey-lesson-card journey-deck-card journey-deck-question-card";
      questionCard.dataset.lessonIndex = String(lessonIndex);
      questionCard.dataset.questionIndex = String(questionIndex);
      questionCard.dataset.cardType = "question";

      const questionHeader = document.createElement("div");
      questionHeader.className = "journey-deck-question-header";
      questionHeader.append(
        createTextEl("span", "dashboard-detail-title", "Prática da aula " + String(lessonIndex + 1).padStart(2, "0")),
        createTextEl("strong", "", lessons[lessonIndex]?.practice?.title || "Resolva sem consultar os cards anteriores")
      );
      const questionProgress = document.createElement("div");
      questionProgress.className = "journey-deck-question-progress";
      const questionSegments = document.createElement("div");
      questionSegments.className = "journey-deck-question-segments";
      questions.forEach((_, segmentIndex) => {
        const segment = document.createElement("span");
        if (segmentIndex <= questionIndex) segment.classList.add("active");
        questionSegments.appendChild(segment);
      });
      questionProgress.append(
        questionSegments,
        createTextEl("span", "journey-deck-question-count", (questionIndex + 1) + " de " + questions.length)
      );
      questionCard.append(questionHeader, questionProgress, question);

      const savedAnswer = state.studentJourneyContext?.answers?.[lessonIndex + "-" + questionIndex];
      const explanationButton = [...question.querySelectorAll(".journey-mini-button")].find((button) => button.textContent.includes("explicação"));
      if (explanationButton) {
        explanationButton.disabled = !savedAnswer;
        explanationButton.title = savedAnswer ? "" : "Responda à questão antes de abrir a explicação.";
      }
      if (savedAnswer) {
        question.querySelectorAll(".journey-practice-option").forEach((option) => {
          option.disabled = true;
          if (normalizeText(option.dataset.option || "") === normalizeText(savedAnswer.correctAnswer || "")) {
            option.classList.add("is-correct");
          }
          if (normalizeText(option.dataset.option || "") === normalizeText(savedAnswer.selectedOption || "") && !savedAnswer.isCorrect) {
            option.classList.add("is-wrong");
          }
        });
      }
      content.appendChild(questionCard);
      cards.push(questionCard);
    });
  });

  if (!content || !cards.length) return deck;

  const controls = document.createElement("div");
  controls.className = "journey-deck-controls";
  const progressMeta = document.createElement("div");
  progressMeta.className = "journey-deck-progress-meta";
  const progressLabel = createTextEl("strong", "", "Progresso da trilha");
  const progressCount = createTextEl("span", "", "Nenhuma etapa concluída");
  progressMeta.append(progressLabel, progressCount);

  const progress = document.createElement("div");
  progress.className = "journey-deck-progress";
  progress.setAttribute("role", "progressbar");
  progress.setAttribute("aria-valuemin", "0");
  progress.setAttribute("aria-valuemax", "100");
  const progressFill = document.createElement("span");
  progress.appendChild(progressFill);

  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.className = "journey-deck-next";
  const nextLabel = createTextEl("span", "", "Avançar");
  const nextIcon = document.createElement("img");
  nextIcon.src = "next-arrow.png";
  nextIcon.alt = "";
  nextIcon.setAttribute("aria-hidden", "true");
  nextButton.append(nextLabel, nextIcon);
  const previousButton = document.createElement("button");
  previousButton.type = "button";
  previousButton.className = "journey-deck-previous";
  const previousIcon = document.createElement("img");
  previousIcon.src = "next-arrow.png";
  previousIcon.alt = "";
  previousIcon.setAttribute("aria-hidden", "true");
  previousButton.append(previousIcon, createTextEl("span", "", "Anterior"));
  const navigation = document.createElement("div");
  navigation.className = "journey-deck-navigation";
  navigation.append(previousButton, nextButton);
  controls.append(progressMeta, progress, navigation);
  deck.appendChild(controls);

  const position = state.studentJourneyDeckPositions[journeyId] || { index: 0, furthestIndex: 0, completed: false };
  position.index = Math.min(Math.max(0, Number(position.index || 0)), cards.length - 1);
  position.furthestIndex = Math.min(Math.max(position.index, Number(position.furthestIndex || 0)), cards.length - 1);
  state.studentJourneyDeckPositions[journeyId] = position;

  function updateDeck() {
    cards.forEach((card, index) => {
      card.hidden = index !== position.index;
      card.setAttribute("aria-hidden", index === position.index ? "false" : "true");
    });

    const currentCard = cards[position.index];
    const completedCards = position.completed ? cards.length : position.furthestIndex;
    const percent = Math.round((completedCards / cards.length) * 100);
    progressFill.style.width = percent + "%";
    progress.setAttribute("aria-valuenow", String(percent));
    progressCount.textContent = position.completed
      ? "Trilha concluída"
      : completedCards === 0
        ? "Nenhuma etapa concluída"
        : completedCards + " de " + cards.length + " etapas concluídas";

    const currentLesson = Number(currentCard.dataset.lessonIndex || 0);
    track?.querySelectorAll(".journey-deck-step").forEach((item, lessonIndex) => {
      item.classList.toggle("active", lessonIndex === currentLesson && !position.completed);
      item.classList.toggle("completed", lessonIndex < currentLesson || position.completed);
    });
    track?.querySelectorAll(".journey-deck-lesson-progress > span").forEach((segment, lessonIndex) => {
      segment.classList.toggle("active", lessonIndex <= currentLesson || position.completed);
      segment.classList.toggle("completed", lessonIndex < currentLesson || position.completed);
    });

    const isQuestion = currentCard.dataset.cardType === "question";
    const questionKey = currentCard.dataset.lessonIndex + "-" + currentCard.dataset.questionIndex;
    const questionAnswered = Boolean(state.studentJourneyContext?.answers?.[questionKey]);
    nextButton.disabled = position.completed || (isQuestion && !questionAnswered);
    previousButton.disabled = position.index === 0 || position.completed;
    nextLabel.textContent = position.index === cards.length - 1 ? "Concluir trilha" : "Avançar";
    nextButton.hidden = position.completed;
    previousButton.hidden = position.completed;
    deck.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  content.addEventListener("click", (event) => {
    if (!event.target.closest(".journey-practice-option")) return;
    const activeCard = event.target.closest(".journey-deck-question-card");
    const explanationButton = [...(activeCard?.querySelectorAll(".journey-mini-button") || [])].find((button) => button.textContent.includes("explicação"));
    if (explanationButton) {
      explanationButton.disabled = false;
      explanationButton.title = "";
    }
    window.setTimeout(updateDeck, 0);
  });

  nextButton.addEventListener("click", () => {
    if (nextButton.disabled) return;
    if (position.index >= cards.length - 1) {
      position.completed = true;
    } else {
      position.index += 1;
      position.furthestIndex = Math.max(position.furthestIndex, position.index);
    }
    updateDeck();
  });

  previousButton.addEventListener("click", () => {
    if (previousButton.disabled) return;
    position.index = Math.max(0, position.index - 1);
    updateDeck();
  });

  updateDeck();
  return deck;
}

function renderJourneyStep(step, stepIndex) {
  const card = document.createElement("div");
  card.className = "journey-step-card";
  card.dataset.type = step.type || "activity";

  const top = document.createElement("div");
  top.className = "journey-step-top";
  top.append(
    createTextEl("span", "journey-step-pill", String(stepIndex + 1).padStart(2, "0")),
    createTextEl("span", "journey-step-type", formatJourneyStepType(step.type))
  );

  const instruction = createTextEl("p", "journey-step-instruction", step.instruction || "Faça a atividade.");
  const prompt = createTextEl("p", "journey-step-prompt", step.prompt || step.content || "Atividade da trilha.");
  card.append(top, instruction, prompt);

  const feedback = document.createElement("div");
  feedback.className = "journey-step-feedback";
  feedback.hidden = true;

  if (Array.isArray(step.options) && step.options.length) {
    const options = document.createElement("div");
    options.className = "journey-step-options";
    step.options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "journey-step-option";
      button.textContent = option;
      button.addEventListener("click", () => {
        const isCorrect = normalizeText(option) === normalizeText(step.correctAnswer || "");
        options.querySelectorAll(".journey-step-option").forEach((node) => {
          node.disabled = true;
          if (normalizeText(node.textContent || "") === normalizeText(step.correctAnswer || "")) {
            node.classList.add("is-correct");
          }
        });
        button.classList.add(isCorrect ? "is-correct" : "is-wrong");
        feedback.hidden = false;
        feedback.className = "journey-step-feedback " + (isCorrect ? "success" : "error");
        feedback.textContent = isCorrect
          ? ("Correto. " + (step.successFeedback || "Resposta correta."))
          : ("Ainda não. " + (step.errorFeedback || "Revise a dica e tente novamente."));
      });
      options.appendChild(button);
    });
    card.appendChild(options);
  }

  const actions = document.createElement("div");
  actions.className = "journey-step-actions";

  if (step.hint) {
    const hintButton = document.createElement("button");
    hintButton.type = "button";
    hintButton.className = "journey-mini-button";
    hintButton.textContent = "Ver dica";
    hintButton.addEventListener("click", () => {
      feedback.hidden = false;
      feedback.className = "journey-step-feedback hint";
      feedback.textContent = step.hint;
    });
    actions.appendChild(hintButton);
  }

  const answerButton = document.createElement("button");
  answerButton.type = "button";
  answerButton.className = "journey-mini-button";
  answerButton.textContent = step.type === "concept_card" ? "Marcar como lido" : "Ver resposta";
  answerButton.addEventListener("click", () => {
    feedback.hidden = false;
    feedback.className = "journey-step-feedback answer";
    feedback.textContent = step.type === "concept_card"
      ? (step.successFeedback || "Cartão concluído.")
      : "Resposta: " + (step.correctAnswer || "-") + (step.explanation ? " — " + step.explanation : "");
  });
  actions.appendChild(answerButton);

  card.append(actions, feedback);
  return card;
}

function formatJourneyStepType(type = "") {
  const labels = {
    concept_card: "Cartão",
    multiple_choice: "Escolha",
    true_false: "V/F",
    fill_blank: "Lacuna",
    error_correction: "Corrigir erro",
    matching: "Parear",
    ordering: "Ordenar",
    final_challenge: "Desafio",
  };
  return labels[type] || "Atividade";
}

function renderJourneyMissions(missions = []) {
  const missionsWrap = document.createElement("div");
  missionsWrap.className = "journey-missions";

  missions.forEach((mission, index) => {
    const card = document.createElement("article");
    card.className = "journey-mission-card";

    const header = document.createElement("div");
    header.className = "journey-mission-header";
    const titleWrap = document.createElement("div");
    titleWrap.append(
      createTextEl("span", "journey-step-index", String(index + 1).padStart(2, "0")),
      createTextEl("h4", "journey-chapter-title", mission.title || "Missão " + (index + 1))
    );
    const xp = createDashboardBadge((mission.xp || 20) + " XP", "success");
    header.append(titleWrap, xp);

    const meta = document.createElement("div");
    meta.className = "journey-mission-meta";
    meta.append(
      createTextEl("span", "", mission.estimatedMinutes || "8 min"),
      createTextEl("span", "", mission.unlockCriterion || "Concluir os passos")
    );

    card.append(
      header,
      createTextEl("p", "journey-chapter-objective", mission.goal || "Praticar a habilidade com passos curtos."),
      meta
    );

    const steps = document.createElement("div");
    steps.className = "journey-steps";
    (mission.steps || []).forEach((step, stepIndex) => {
      steps.appendChild(renderJourneyStep(step, stepIndex));
    });
    card.appendChild(steps);
    missionsWrap.appendChild(card);
  });

  return missionsWrap;
}

function renderJourneyLegacyChapters(chapters = []) {
  const chaptersWrap = document.createElement("div");
  chaptersWrap.className = "journey-chapters";
  chapters.forEach((chapter, index) => {
    const card = document.createElement("article");
    card.className = "journey-chapter-card";
    const chapterHeader = document.createElement("div");
    chapterHeader.className = "journey-chapter-header";
    chapterHeader.append(
      createTextEl("span", "journey-step-index", String(index + 1).padStart(2, "0")),
      createTextEl("h4", "journey-chapter-title", chapter.title || "Fase " + (index + 1))
    );
    card.append(
      chapterHeader,
      createTextEl("p", "journey-chapter-objective", chapter.objective || "Objetivo da fase."),
      createTextEl("p", "journey-chapter-explanation", chapter.explanation || "Explicação guiada gerada a partir do material.")
    );

    if (chapter.microLessons?.length) {
      const block = document.createElement("div");
      block.className = "journey-output-block";
      block.append(createTextEl("strong", "", "Microlições"), renderJourneyList(chapter.microLessons));
      card.appendChild(block);
    }

    if (chapter.activities?.length) {
      const block = document.createElement("div");
      block.className = "journey-output-block";
      block.append(createTextEl("strong", "", "Atividades"), renderJourneyList(chapter.activities));
      card.appendChild(block);
    }

    chaptersWrap.appendChild(card);
  });
  return chaptersWrap;
}

function getJourneyTotalQuestions(journey = {}) {
  return (journey.lessons || []).reduce((sum, lesson) => sum + normalizeJourneyListItems(lesson.practice?.questions || []).length, 0);
}

function getProgressPercent(progress = {}) {
  const total = Number(progress.totalQuestions || 0);
  if (!total) return 0;
  return Math.min(100, Math.round((Number(progress.completedQuestions || 0) / total) * 100));
}

function getStudentAreaIdentity() {
  updateLoginButtonState();
  return {
    studentName: studentNameInput.value.trim(),
    studentClassroom: studentClassroomInput.value.trim(),
    studentShift: studentShiftInput?.value.trim() || "",
  };
}

function renderStudentProgressSummary(journeys = []) {
  const totalQuestions = journeys.reduce((sum, item) => sum + Number(item.progress?.totalQuestions || 0), 0);
  const completed = journeys.reduce((sum, item) => sum + Number(item.progress?.completedQuestions || 0), 0);
  const percent = totalQuestions ? Math.round((completed / totalQuestions) * 100) : 0;
  if (studentAreaProgressValueEl) studentAreaProgressValueEl.textContent = percent + "%";
  if (studentAreaProgressCopyEl) {
    studentAreaProgressCopyEl.textContent = journeys.length
      ? completed + " de " + totalQuestions + " questões concluídas."
      : "Nenhuma trilha enviada para este aluno ainda.";
  }
}

function getStudentJourneyStatusLabel(progress = {}) {
  if (progress.status === "completed") return "Concluída";
  if (progress.status === "in_progress") return "Em andamento";
  return "Não iniciada";
}

function renderStudentJourneyList(journeys = []) {
  if (!studentJourneyListEl) return;
  if (!journeys.length) {
    studentJourneyListEl.innerHTML = '<div class="student-empty-card">Nenhuma trilha encontrada para este nome, turma e turno.</div>';
    return;
  }
  const cards = journeys.map((record, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "student-journey-item" + (index === 0 ? " active" : "");
    button.dataset.journeyId = record.id;
    const percent = getProgressPercent(record.progress);
    button.append(
      createTextEl("strong", "", record.journey?.title || "Trilha personalizada"),
      createTextEl("span", "", (record.metadata?.student?.subject || "Disciplina") + " · " + getStudentJourneyStatusLabel(record.progress)),
      createTextEl("em", "", percent + "% concluído")
    );
    button.addEventListener("click", () => {
      studentJourneyListEl.querySelectorAll(".student-journey-item").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderStudentJourneyDetail(record);
    });
    return button;
  });
  studentJourneyListEl.replaceChildren(...cards);
}

function renderStudentJourneyDetail(record) {
  if (!studentJourneyDetailEl || !studentAreaEmptyEl) return;
  const identity = getStudentAreaIdentity();
  const progress = record.progress || {};
  const answers = { ...(progress.answers || {}) };
  state.studentJourneyContext = {
    journeyId: record.id,
    studentName: identity.studentName,
    studentClassroom: identity.studentClassroom,
    studentShift: identity.studentShift,
    totalQuestions: getJourneyTotalQuestions(record.journey),
    answers,
  };

  const header = document.createElement("div");
  header.className = "student-journey-detail-header";
  header.append(
    createTextEl("span", "dashboard-detail-title", getStudentJourneyStatusLabel(progress)),
    createTextEl("h2", "", record.journey?.title || "Trilha personalizada"),
    createTextEl("p", "", record.journey?.summary || "Jornada enviada pelo professor.")
  );

  const progressBar = document.createElement("div");
  progressBar.className = "student-area-progressbar";
  const fill = document.createElement("span");
  fill.style.width = getProgressPercent(progress) + "%";
  progressBar.appendChild(fill);

  const content = record.journey?.lessons?.length
    ? renderStudentJourneyCardDeck(record.journey.lessons, record.journey, record.id)
    : createTextEl("p", "student-empty-card", "Esta trilha ainda não tem aulas disponíveis.");

  studentJourneyDetailEl.replaceChildren(header, progressBar, content);
  studentJourneyDetailEl.hidden = false;
  studentAreaEmptyEl.hidden = true;
  const grid = studentJourneyDetailEl.closest(".student-area-grid");
  const view = studentJourneyDetailEl.closest(".student-journey-view");
  grid?.classList.remove("journey-list-mode");
  grid?.classList.add("journey-focus-mode");
  if (view) view.hidden = false;
  if (backFromStudentAreaButton) backFromStudentAreaButton.textContent = "Voltar às trilhas";
}

async function recordStudentJourneyAnswer(lessonIndex, questionIndex, isCorrect, selectedOption, correctAnswer) {
  const context = state.studentJourneyContext;
  if (!context) return;
  const key = lessonIndex + "-" + questionIndex;
  if (!context.answers[key]) {
    context.answers[key] = {
      lessonIndex,
      questionIndex,
      selectedOption,
      correctAnswer,
      isCorrect: Boolean(isCorrect),
      answeredAt: new Date().toISOString(),
    };
  }
  const values = Object.values(context.answers);
  const completedQuestions = values.length;
  const correctQuestions = values.filter((answer) => answer.isCorrect).length;
  const payload = {
    studentName: context.studentName,
    studentClassroom: context.studentClassroom,
    studentShift: context.studentShift,
    journeyId: context.journeyId,
    totalQuestions: context.totalQuestions,
    completedQuestions,
    correctQuestions,
    xp: correctQuestions * 10,
    answers: context.answers,
  };
  try {
    await fetch(STUDENT_PROGRESS_API_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const active = state.studentJourneys.find((item) => item.id === context.journeyId);
    if (active) {
      active.progress = {
        ...active.progress,
        ...payload,
        status: completedQuestions >= context.totalQuestions ? "completed" : "in_progress",
      };
      renderStudentProgressSummary(state.studentJourneys);
    }
  } catch (error) {
    console.warn("Nao foi possivel salvar progresso do aluno.", error);
  }
}

async function openStudentArea() {
  const identity = getStudentAreaIdentity();
  if (!identity.studentName || !identity.studentClassroom || !identity.studentShift) {
    loginHintEl.textContent = "Preencha nome, turma e turno para abrir suas trilhas.";
    loginHintEl.style.display = "";
    return;
  }
  state.studentName = identity.studentName;
  state.studentClassroom = identity.studentClassroom;
  state.studentShift = identity.studentShift;
  switchScreen("studentArea");
  const studentAreaGrid = studentJourneyDetailEl?.closest(".student-area-grid");
  const studentJourneyView = studentJourneyDetailEl?.closest(".student-journey-view");
  studentAreaGrid?.classList.remove("journey-focus-mode", "journey-list-mode");
  if (studentJourneyView) studentJourneyView.hidden = false;
  if (backFromStudentAreaButton) backFromStudentAreaButton.textContent = "Voltar";
  if (studentAreaSubtitleEl) {
    studentAreaSubtitleEl.textContent = identity.studentName + " · " + identity.studentClassroom + " · " + identity.studentShift;
  }
  if (studentJourneyListEl) studentJourneyListEl.innerHTML = '<div class="student-empty-card">Carregando trilhas...</div>';
  if (studentJourneyDetailEl) {
    studentJourneyDetailEl.hidden = true;
    studentJourneyDetailEl.replaceChildren();
  }
  if (studentAreaEmptyEl) {
    studentAreaEmptyEl.hidden = false;
    studentAreaEmptyEl.querySelector("p").textContent = "Buscando trilhas enviadas pelo professor.";
  }
  try {
    const query = new URLSearchParams(identity).toString();
    const { data } = await fetchJsonWithRetry(STUDENT_JOURNEYS_API_URL + "?" + query, {}, {
      attempts: 2,
      timeoutMs: 12000,
      onRetry: () => {
        if (studentAreaEmptyEl) studentAreaEmptyEl.querySelector("p").textContent = "Conexão instável. Tentando novamente...";
      },
    });
    state.studentJourneys = data.journeys || [];
    renderStudentProgressSummary(state.studentJourneys);
    renderStudentJourneyList(state.studentJourneys);
    if (state.studentJourneys[0]) {
      renderStudentJourneyDetail(state.studentJourneys[0]);
    } else if (studentAreaEmptyEl) {
      studentAreaEmptyEl.querySelector("p").textContent = "Nenhuma trilha foi enviada para este nome, turma e turno ainda.";
    }
  } catch (error) {
    if (studentJourneyListEl) studentJourneyListEl.innerHTML = '<div class="student-empty-card">Erro ao carregar trilhas.</div>';
    if (studentAreaEmptyEl) studentAreaEmptyEl.querySelector("p").textContent = error.message;
  }
}

function renderGeneratedJourney(journey) {
  state.studentJourneyContext = null;
  if (!journeyGeneratedOutputEl || !journey) return;
  const header = document.createElement("div");
  header.className = "journey-output-header";
  const titleWrap = document.createElement("div");
  titleWrap.append(
    createTextEl("span", "dashboard-detail-title", "Jornada gerada"),
    createTextEl("h3", "journey-output-title", journey.title || "Trilha personalizada")
  );
  const badge = createDashboardBadge(String(journey.estimatedDuration || "5 missões"), "success");
  header.append(titleWrap, badge);

  const summary = document.createElement("p");
  summary.className = "journey-output-summary";
  summary.textContent = journey.summary || "Jornada criada a partir do PDF enviado.";

  const focusGrid = document.createElement("div");
  focusGrid.className = "journey-output-focus";
  const focus = journey.diagnosticFocus || {};
  [
    ["Disciplina", focus.subject || state.dashboardSelectedRow?.subject || "-"],
    ["Habilidade", focus.skill || state.dashboardSelectedRow?.weakestSkill || "-"],
    ["Dificuldade", focus.cognitiveDifficulty || state.dashboardSelectedRow?.weakestCognitive || "-"],
  ].forEach(([label, value]) => {
    const item = document.createElement("div");
    item.append(createTextEl("span", "dashboard-detail-title", label), createTextEl("strong", "", value));
    focusGrid.appendChild(item);
  });

  const playableJourney = journey.lessons?.length
    ? renderJourneyLessons(journey.lessons, journey)
    : journey.missions?.length
      ? renderJourneyMissions(journey.missions)
      : renderJourneyLegacyChapters(journey.chapters || []);

  const teacherNotes = document.createElement("div");
  teacherNotes.className = "journey-teacher-notes";
  teacherNotes.append(
    createTextEl("h4", "journey-section-title", "Orientações para o professor"),
    renderJourneyList(journey.teacherGuidance || [])
  );

  journeyGeneratedOutputEl.replaceChildren(header, summary, focusGrid, playableJourney, teacherNotes);
  journeyGeneratedOutputEl.hidden = false;
}

async function submitJourneyGeneration(event) {
  event.preventDefault();
  const row = state.dashboardSelectedRow;
  const file = journeyPdfInput?.files?.[0];

  if (!row) {
    setJourneyStatus("error", "Selecione um aluno antes de gerar a jornada.");
    return;
  }
  if (!file) {
    setJourneyStatus("error", "Envie um PDF para gerar a jornada.");
    return;
  }
  if (file.type && file.type !== "application/pdf") {
    setJourneyStatus("error", "O material precisa estar em PDF.");
    return;
  }

  setJourneyLoading(true);
  resetJourneyModalOutput();
  setJourneyStatus("sending", "Gerando trilha completa com IA local. Isso pode levar alguns minutos; mantenha esta janela aberta.");

  const formData = new FormData();
  formData.set("pdf", file);
  formData.set("student", JSON.stringify(createJourneyPayload(row)));
  formData.set("objective", journeyObjectiveInput?.value.trim() || "");
  formData.set("duration", journeyDurationInput?.value || "padrao");
  formData.set("tone", journeyToneInput?.value || "acolhedor");

  try {
    const response = await fetch(JOURNEY_API_URL, { method: "POST", body: formData });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error || "Não foi possível gerar a jornada agora.");
    }
    state.lastGeneratedJourney = data.journey;
    renderGeneratedJourney(data.journey);
    const providerLabel = data.provider === "ollama"
      ? "Ollama local"
      : data.provider === "offline"
        ? "modo local sem IA"
        : "OpenAI";
    const pdfNote = data.pdfTextExtracted ? "" : " O texto do PDF não pôde ser extraído automaticamente; revise a trilha antes de aplicar.";
    setJourneyStatus("forwarded", "Jornada gerada com " + providerLabel + " e salva no servidor." + pdfNote);
  } catch (error) {
    console.error("Nao foi possivel gerar a jornada.", error);
    setJourneyStatus("error", getJourneyGenerationErrorMessage(error));
  } finally {
    setJourneyLoading(false);
  }
}

function openTeacherLogin() {
  teacherPasswordInput.value = "";
  teacherErrorEl.style.display = "none";
  switchScreen("teacherLogin");
  teacherPasswordInput.focus();
}

openTeacherAccessButton.addEventListener("click", openTeacherLogin);

backFromTeacherLoginButton.addEventListener("click", () => {
  teacherErrorEl.style.display = "none";
  switchScreen("login");
});

enterDashboardButton.addEventListener("click", () => {
  const password = teacherPasswordInput.value.trim();

  if (password === TEACHER_PASSWORD) {
    teacherErrorEl.style.display = "none";
    switchScreen("dashboard");
    loadDashboardData();
  } else {
    teacherErrorEl.style.display = "block";
  }
});

teacherPasswordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    enterDashboardButton.click();
  }
});

backFromDashboardButton.addEventListener("click", () => {
  switchScreen("login");
});

refreshDashboardButton?.addEventListener("click", () => {
  loadDashboardData();
});

openQuestionBankButton?.addEventListener("click", async () => {
  await loadManagedQuestionBank();
  renderDashboardQuestions();
  setTeacherToolVisibility(questionBankModalEl, true);
});

closeQuestionBankButton?.addEventListener("click", () => {
  closeQuestionEditor();
  setTeacherToolVisibility(questionBankModalEl, false);
});

newQuestionButton?.addEventListener("click", () => openQuestionEditor());
cancelQuestionEditorButton?.addEventListener("click", closeQuestionEditor);
questionEditorTypeInput?.addEventListener("change", updateQuestionEditorType);
questionEditorEl?.addEventListener("submit", saveManagedQuestion);
questionImportInput?.addEventListener("change", () => importManagedQuestions(questionImportInput.files?.[0]));
exportQuestionsButton?.addEventListener("click", exportManagedQuestions);

openJourneyManagerButton?.addEventListener("click", async () => {
  setTeacherToolVisibility(journeyManagerModalEl, true);
  await loadManagedJourneys();
});
closeJourneyManagerButton?.addEventListener("click", () => setTeacherToolVisibility(journeyManagerModalEl, false));
refreshJourneyManagerButton?.addEventListener("click", loadManagedJourneys);
journeyManagerSearchInput?.addEventListener("input", renderManagedJourneys);
journeyManagerShowArchivedInput?.addEventListener("change", renderManagedJourneys);

openJourneyGeneratorButton?.addEventListener("click", openJourneyGeneratorModal);
closeJourneyGeneratorButton?.addEventListener("click", closeJourneyGeneratorModal);
cancelJourneyGeneratorButton?.addEventListener("click", closeJourneyGeneratorModal);
journeyGeneratorFormEl?.addEventListener("submit", submitJourneyGeneration);
journeyPdfInput?.addEventListener("change", () => {
  const file = journeyPdfInput.files?.[0];
  journeyFileNameEl.textContent = file ? file.name : "Escolha o arquivo que servirá de base para a trilha.";
});

generateDashboardReportButton?.addEventListener("click", openReportFilterModal);
closeReportFilterButton?.addEventListener("click", () => setTeacherToolVisibility(reportFilterModalEl, false));
cancelReportFilterButton?.addEventListener("click", () => setTeacherToolVisibility(reportFilterModalEl, false));
confirmDashboardReportButton?.addEventListener("click", () => {
  const reportRows = getReportRows();
  generateDashboardPdfReport(reportRows, getReportFilterSummary(), getReportContentOptions());
  setTeacherToolVisibility(reportFilterModalEl, false);
});
reportUseDashboardFiltersButton?.addEventListener("click", useDashboardFiltersForReport);
reportStudentSearchInput?.addEventListener("input", () => {
  renderReportStudentOptions();
  updateReportFilterPreview();
});
reportSelectVisibleStudentsButton?.addEventListener("click", () => {
  reportStudentOptionsEl?.querySelectorAll("input[type='checkbox']").forEach((input) => { input.checked = true; });
  updateReportFilterPreview();
});
reportClearStudentsButton?.addEventListener("click", () => {
  reportStudentOptionsEl?.querySelectorAll("input[type='checkbox']").forEach((input) => { input.checked = false; });
  updateReportFilterPreview();
});
[reportClassroomOptionsEl, reportShiftOptionsEl, reportSubjectOptionsEl, reportLevelOptionsEl, reportWeakSkillOptionsEl, reportWeakCognitiveOptionsEl, reportStudentOptionsEl].forEach((container) => {
  container?.addEventListener("change", updateReportFilterPreview);
});
[reportAccuracyFilter, reportDateFromInput, reportDateToInput, reportRecordModeInput].forEach((control) => {
  control?.addEventListener("change", updateReportFilterPreview);
});
dashboardQuestionSubjectFilter?.addEventListener("change", () => {
  closeQuestionEditor();
  renderDashboardQuestions();
});

dashboardSearchInput?.addEventListener("input", renderDashboardViews);
dashboardClassroomFilter?.addEventListener("change", renderDashboardViews);
dashboardShiftFilter?.addEventListener("change", renderDashboardViews);
dashboardSubjectFilter?.addEventListener("change", renderDashboardViews);

dashboardNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    navigateDashboardToSection(item.dataset.target);
  });
});

closeStudentGuideButton?.addEventListener("click", () => {
  setGuideVisibility(studentGuideEl, false);
});

closeTeacherGuideButton?.addEventListener("click", () => {
  setGuideVisibility(teacherGuideEl, false);
});

setGuideVisibility(studentGuideEl, true);
setGuideVisibility(teacherGuideEl, false);
setTeacherToolVisibility(questionBankModalEl, false);
setTeacherToolVisibility(journeyManagerModalEl, false);
setTeacherToolVisibility(reportFilterModalEl, false);
setTeacherToolVisibility(journeyGeneratorModalEl, false);
updateJourneyEntryPoint(state.dashboardSelectedRow);
loadManagedQuestionBank();

missionsButton.addEventListener("click", async () => {
  if (!state.lastResult) {
    setSendButtonState("error");
    setSendStatus("error", "Finalize o teste antes de enviar o resultado.");
    return;
  }

  if (state.resultSubmitted) {
    setSendStatus("forwarded", "Este resultado já teve uma tentativa de envio encaminhada para a planilha.");
    setSendButtonState("forwarded");
    missionsButton.disabled = true;
    return;
  }

  missionsButton.disabled = true;
  setSendButtonState("sending");
  setSendStatus("sending", "Enviando resultado para a planilha...");

  const sendResult = await submitResultToSheet(state.lastResult);
  if (sendResult.ok) {
    setSendButtonState("forwarded");
    setSendStatus("forwarded", "Envio encaminhado para a planilha. Atualize o dashboard em alguns segundos.");
  } else {
    missionsButton.disabled = false;
    setSendButtonState("error");
    const reasonText = {
      "missing-url": "URL do Apps Script não configurada.",
      "empty-payload": "Não foi possível montar os dados do resultado.",
      "submit-error": "Não foi possível concluir o envio agora.",
      "already-submitted": "Este resultado já teve uma tentativa de envio encaminhada.",
    }[sendResult.reason] || "Falha inesperada ao preparar o envio.";
    setSendStatus("error", `${reasonText} Verifique o Apps Script e tente novamente.`);
  }
});



// ===============================
// GRÁFICO DE DISTRIBUIÇÃO POR NÍVEL
// ===============================

function renderDashboardLevelChart(rows = getFilteredDashboardRows()) {
  if (!dashboardLevelChartEl) return;

  const total = rows.length || 1;
  const levels = [
    { label: "Nível 1", key: 1, className: "n1" },
    { label: "Nível 2", key: 2, className: "n2" },
    { label: "Nível 3", key: 3, className: "n3" },
    { label: "Nível 4", key: 4, className: "n4" },
  ];

  const nodes = levels.map((level) => {
    const count = rows.filter((row) => Number(row.levelNumber) === level.key).length;
    const percent = Math.round((count / total) * 100);
    const wrapper = document.createElement("div");
    const label = document.createElement("div");
    const barBg = document.createElement("div");
    const bar = document.createElement("div");
    const value = document.createElement("div");

    wrapper.className = "chart-row";
    label.className = "chart-label";
    label.textContent = level.label;
    barBg.className = "chart-bar-bg";
    bar.className = `chart-bar ${level.className}`;
    bar.style.width = `${percent}%`;
    value.className = "chart-value";
    value.textContent = String(count);
    barBg.appendChild(bar);
    wrapper.append(label, barBg, value);
    return wrapper;
  });

  dashboardLevelChartEl.replaceChildren(...nodes);
}
