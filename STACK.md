# Tech Stack Specifications & Selection Rules

- **Language**: TypeScript v5+ (Strict Mode Enabled)
- **Runtime Selection Rules**:
  - Default: **Bun** untuk local dev & proyek baru (fastest DX, `bun test`).
  - Fallback: **Node.js LTS** untuk deployment Vercel / AWS Lambda / Legacy C++ bindings.
  - Gunakan package manager yang mengikuti keputusan runtime/project: command Bun untuk profile Bun, atau npm command untuk profile Node.js. Jangan mencampur keduanya dalam satu project kecuali ADR secara eksplisit mengizinkannya.
- **Architecture Pattern**:
  - **Decoupled**: Vite + React 18+ + TanStack Router + Hono.js
  - **Unified Monolith**: Next.js 14+ App Router + Hono API (`app/api/[[...route]]/route.ts`)
- **State & Data Fetching**: TanStack Query v5
- **Styling**: Tailwind CSS v3 / v4
- **ORM**: Drizzle ORM
- **Database**: SQLite (Better-SQLite3/Turso) OR PostgreSQL (Neon/Supabase)
- **Validation**: Zod
- **Testing**: Vitest (Unit/Integration) & Playwright (E2E)
- **Monitoring & Observability**: Sentry / Highlight.io & Structured JSON Logging

## Active Stack Resolution

Daftar di atas adalah pilihan yang didukung, bukan dependency yang harus dipasang sekaligus. Sebelum implementasi, pilihan aktif dicatat dalam `.ai/decisions/`, diringkas di `MEMORY.md`, dan ditautkan dari `.ai/project-state.md`. Lockfile dari package manager terpilih WAJIB di-commit.
