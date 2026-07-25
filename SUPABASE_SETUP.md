# Configurar Supabase no Smart Study

Enquanto estas variáveis estiverem vazias, o Smart Study continua usando os arquivos locais em `data/*.json`.

## 1. Criar projeto

1. Crie um projeto em https://supabase.com.
2. Abra `SQL Editor`.
3. Cole e execute o conteúdo de `supabase-schema.sql`.

## 2. Pegar chaves

No Supabase, vá em `Project Settings > API` e copie:

- Project URL -> `SUPABASE_URL`
- service_role key -> `SUPABASE_SERVICE_ROLE_KEY`

Use a service role somente no servidor. Nunca coloque essa chave no frontend.

## 3. Configurar localmente

Crie um arquivo `.env` na pasta do projeto com:

```env
SUPABASE_URL=https://SEU-PROJETO.supabase.co
SUPABASE_SERVICE_ROLE_KEY=sua_service_role_key
AI_PROVIDER=ollama
OLLAMA_MODEL=qwen2.5:7b
PORT=8768
```

Depois reinicie o servidor:

```bash
cd "/Users/joaoribeiro/Documents/smart study"
npm start
```

## 4. Conferir

Abra:

```text
http://localhost:8768/api/health
```

Se estiver certo, aparecerá:

```json
{
  "storage": "supabase",
  "supabaseConfigured": true
}
```

## Como funciona agora

- Jornada gerada por PDF: salva localmente e tenta salvar no Supabase.
- Minhas trilhas: se Supabase estiver configurado, lê do Supabase; se falhar, usa local.
- Progresso do aluno: salva localmente e tenta fazer upsert no Supabase.
