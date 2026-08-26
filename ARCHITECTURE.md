# System Architecture Specification

## 1. High-Level Overview
Boilerplate ini mendukung salah satu dari dua pola arsitektur yang dipilih saat project intake:
- **Pola A (Decoupled)**: Frontend React (Vite + TanStack Router) + Backend Hono.js API Server.
- **Pola B (Next.js Unified)**: Next.js App Router (FE Components + Hono API Route / Server Actions).

Pilihan aktif WAJIB dicatat dalam ADR, diringkas di `MEMORY.md`, dan direferensikan oleh `.ai/project-state.md`. Setelah dipilih, agent hanya boleh memakai struktur folder dan command dari pola aktif.

## 2. Data Flow Architecture
`Client Request` -> `Zod Input Validator` -> `Route Handler / Server Action` -> `Service Layer` -> `Repository / Drizzle ORM` -> `Database` -> `Structured Response`.

## 3. Communication Contract
Frontend dan Backend berbagi tipe data Zod Schema & Hono RPC Type Client.
Dilarang keras mengubah API Contract di backend tanpa mengupdate tipe data di frontend.
