# SingleStartup — Автоматическая проверка ЕГЭ по биологии

Сервис для автоматической проверки развернутых ответов второй части ЕГЭ по биологии с использованием ИИ.

## Архитектура

```
SingleStartup/
├── front/                         # React (Vite) — интерфейс проверки заданий
│   ├── src/
│   │   ├── sections/
│   │   │   ├── FormTaskChecker/   # Форма ввода задания, ключей и ответа ученика
│   │   │   ├── AIresult/          # Таблица с результатами проверки ИИ
│   │   │   └── TaskChecker/       # Обёртка: форма + результат
│   │   └── types/
│   │       └── gradeResult.ts     # Типы ответа API
│   ├── Dockerfile                 # Multi-stage: node build → nginx
│   └── nginx.conf                 # SPA-роутинг
│
├── back/ege-biology-grader/       # FastAPI — 3-стадийный ИИ-грейдер
│   ├── src/
│   │   ├── grader/                # Ядро: keys → bio_errors → scoring
│   │   ├── adapters/              # OpenAI-compatible API + REST /api/grade
│   │   ├── prompts/               # Системные промпты + few-shot примеры
│   │   └── schemas/               # JSON Schema для ответов LLM
│   └── Dockerfile
│
├── docker-compose.yml             # Оркестрация: Caddy + frontend + grader-api
└── Caddyfile                      # Reverse proxy: /api/* → бэк, /* → фронт
```

## Быстрый старт (Docker)

> Нужен только [Docker](https://docs.docker.com/get-docker/) — больше ничего устанавливать не нужно.

### 1. Клонируйте репозиторий

```bash
git clone <url-репозитория>
cd SingleStartup
```

### 2. Настройте API-ключ OpenAI

Откройте файл `back/ege-biology-grader/deploy/env/grader-api.env` и укажите свой ключ:

```env
OPENAI_API_KEY=sk-proj-ваш-ключ-здесь
```

### 3. Запустите

```bash
docker compose up -d --build
```

### 4. Откройте в браузере

```
http://localhost/test/
```

Готово! Фронтенд, бэкенд и reverse proxy поднимутся автоматически.

---

## Локальная разработка (без Docker)

Для разработки удобнее запускать фронт и бэк отдельно:

### Фронтенд

```bash
cd front
npm install
npm run dev
```

Фронтенд будет доступен на `http://localhost:5173/test/`

### Бэкенд

```bash
cd back/ege-biology-grader
python3 -m pip install -e ".[dev]"
python -m cli.run_openai_adapter
```

Бэкенд будет доступен на `http://localhost:8000`

---

## Как это работает

1. **Пользователь** вводит в форму: номер линии (22–28), условие задачи, ключи ФИПИ, ответ ученика
2. **Фронтенд** отправляет POST-запрос на `/api/grade`
3. **Бэкенд** прогоняет ответ через 3 стадии LLM:
   - **Stage 1 (keys)** — сопоставление ответа с ключами, оценка 1–5
   - **Stage 2 (bio_errors)** — выявление биологических ошибок
   - **Stage 3 (scoring)** — алгоритмический подсчёт баллов (0–3)
4. **Результат** отображается в виде таблицы с засчитанными/незасчитанными ключами

---

## Технологии

| Слой | Технологии |
|------|-----------|
| Фронтенд | React 19, TypeScript, Vite, SCSS Modules, Zod, React Hook Form |
| Бэкенд | Python 3.10+, FastAPI, OpenAI API (GPT-5.2) |
| Деплой | Docker, Caddy (reverse proxy, auto-HTTPS) |
