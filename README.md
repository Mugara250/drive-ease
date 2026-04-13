# Drive Ease - Full-Stack Setup

Development setup for a car rental platform with:

- Frontend: React + TypeScript + Tailwind CSS (Vite)
- Backend: NestJS + TypeScript
- Database: PostgreSQL
- Orchestration: Docker Compose (database only)

No business/domain logic is included by design.

## Project Structure

```text
.
├── backend/
│   ├── src/
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
├── .env.example
├── docker-compose.yml
└── README.md
```

## 1) Environment Setup

Copy all example env files:

```bash
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

## 2) Run Database In Docker

```bash
npm run db:up
```

Services:

- PostgreSQL: localhost:5432

Stop database:

```bash
npm run db:down
```

Remove volumes (including database data):

```bash
docker compose down -v
```

## 3) Run Locally (Without Docker)

Install dependencies:

```bash
cd frontend && npm install
cd ../backend && npm install
```

Start backend:

```bash
npm run dev:backend
```

Start frontend:

```bash
npm run dev:frontend
```

## Notes

- Backend CORS is configured for frontend dev origin.
- Backend uses `@nestjs/config` and Prisma setup placeholders for PostgreSQL.
- Frontend uses Tailwind CSS integrated through PostCSS.
