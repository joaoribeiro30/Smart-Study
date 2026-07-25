# Smart Study

Plataforma de aprendizagem adaptativa para diagnosticar dificuldades, criar trilhas personalizadas e apoiar professores no acompanhamento da evolução de cada estudante.

> O Smart Study transforma resultados de avaliações em intervenções pedagógicas mais claras, organizadas e acompanháveis.

## O que a plataforma faz

- Aplica um diagnóstico adaptativo por disciplina.
- Identifica nível, habilidades e pontos de atenção do estudante.
- Gera trilhas de aprendizagem em cards sequenciais, com barra de progresso.
- Evita que o aluno avance livremente pelo conteúdo antes de concluir cada etapa.
- Permite que professores criem trilhas a partir de materiais em PDF.
- Oferece painel de acompanhamento com resultados, filtros e gráficos.
- Mantém um banco de questões por disciplina, com criação, edição, importação, exportação e versionamento.
- Permite gerenciar trilhas: localizar duplicidades, renomear, arquivar, restaurar e excluir.

## Tecnologias

- HTML, CSS e JavaScript no frontend
- Node.js no servidor
- `pdf-parse` para leitura de materiais PDF
- OpenAI ou Ollama para geração de trilhas com IA
- Supabase opcional para persistência em nuvem
- JSON local como alternativa de armazenamento durante o desenvolvimento

## Como executar localmente

### 1. Pré-requisitos

- Node.js 18 ou superior
- npm
- Opcional: [Ollama](https://ollama.com/) para usar IA local

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente

Crie uma cópia de `.env.example` com o nome `.env`:

```bash
cp .env.example .env
```

Escolha um provedor de IA no arquivo `.env`:

```env
# Usa IA local com Ollama
AI_PROVIDER=ollama
OLLAMA_MODEL=qwen2.5:7b

# Ou usa OpenAI
# AI_PROVIDER=openai
# OPENAI_API_KEY=sua_chave_aqui
```

Também é possível executar sem IA:

```env
AI_PROVIDER=offline
```

### 4. Inicie a aplicação

```bash
npm start
```

Abra [http://localhost:8768](http://localhost:8768) no navegador. A porta pode ser alterada por `PORT` no `.env`.

## Banco de dados opcional: Supabase

Por padrão, o projeto utiliza arquivos locais na pasta `data/`. Para persistir trilhas e progresso no Supabase:

1. Crie um projeto no Supabase.
2. Execute o arquivo `supabase-schema.sql` no SQL Editor.
3. Preencha `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY` no `.env`.
4. Reinicie o servidor.

Veja o passo a passo completo em [SUPABASE_SETUP.md](SUPABASE_SETUP.md).

## Estrutura principal

```text
├── app.js                 # Interface e lógica do frontend
├── server.js              # API, IA, PDFs e persistência
├── index.html             # Página principal
├── styles.css             # Estilos da aplicação
├── supabase-schema.sql    # Estrutura opcional do Supabase
├── data/                  # Dados locais — ignorados pelo Git
└── uploads/               # PDFs enviados — ignorados pelo Git
```

## Segurança e privacidade

- Nunca envie o arquivo `.env` para o GitHub.
- PDFs enviados e dados locais de estudantes são ignorados pelo Git.
- Antes de usar com dados reais de alunos, implemente política de privacidade, controle de acesso por perfil, logs de auditoria e processos compatíveis com a LGPD.

## Próximos passos

- Autenticação real para redes, escolas, professores e estudantes.
- Integração com sistemas escolares.
- Relatórios institucionais e indicadores de recomposição da aprendizagem.
- Acessibilidade e suporte a redes de baixa conectividade.
- Implantação em nuvem com monitoramento, backups e níveis de serviço.

## Licença

Este repositório ainda não possui uma licença de código aberto definida. Antes de aceitar contribuições externas ou distribuir o código, escolha e adicione uma licença apropriada.
