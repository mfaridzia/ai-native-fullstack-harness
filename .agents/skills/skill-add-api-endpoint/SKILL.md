---
name: skill-add-api-endpoint
description: "Prosedur menambahkan endpoint API baru dengan Hono.js, Zod validation, dan Vitest unit test."
---

# Skill Procedure: Adding New Type-Safe API Endpoint

1. Baca profile/plan aktif untuk menentukan backend root dan pola modular coupled atau decoupled. Jangan membuat layout baru yang bertentangan dengan keputusan tersebut.
2. Implementasikan Zod request/response schema di dalam feature module yang ditentukan plan.
3. Implementasikan Hono route, service, dan data-access sesuai separation of concerns; pasang `zValidator` pada request.
4. Daftarkan sub-router pada composition root dari profile aktif.
5. Tulis unit/integration test berdampingan dengan implementasi (`*.test.ts`); hanya E2E yang ditempatkan di root `e2e/`.
6. Jalankan lint, typecheck, test, dan coverage melalui package manager aktif. Berhenti dan laporkan jika kontrak atau profile belum diputuskan.
