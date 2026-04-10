# Drive Ease - Full-Stack Setup

Production-ready development setup for a car rental platform with:

- Frontend: React + TypeScript + Tailwind CSS (Vite)
- Backend: NestJS + TypeScript
- Database: PostgreSQL
- Orchestration: Docker Compose

No business/domain logic is included by design.

## Project Structure

```text
.
├── backend/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   ├── Dockerfile
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

## 2) Run With Docker Compose

```bash
docker compose up --build
```

Services:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000
- PostgreSQL: localhost:5432

Stop services:

```bash
docker compose down
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
cd backend
npm run start:dev
```

Start frontend:

```bash
cd frontend
npm run dev
```

## Notes

- Backend CORS is configured for frontend dev origin.
- Backend uses `@nestjs/config` and Prisma setup placeholders for PostgreSQL.
- Frontend uses Tailwind CSS integrated through PostCSS.
- Dockerfiles include multi-stage targets suitable for development and production evolution.
