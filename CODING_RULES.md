# Universal Coding Rules & Guardrails

## 0. Automatic Subagent & Skill Routing
AI Assistant harus secara otomatis me-launch Subagent yang sesuai dari `.agents/agents/` untuk tugas kompleks dan menerapkan prosedur yang relevan dari `.agents/skills/` berdasarkan niat (intent) dari prompt pengguna tanpa perlu dipanggil secara eksplisit.

## 1. Environment Variables & Secret Validation
Dilarang mengakses `process.env` atau `import.meta.env` secara mentah. Semua environment variables WAJIB di-validate menggunakan Zod Schema di `src/env.ts` saat startup time.

## 2. Scratchpad Isolation Guardrail
Dilarang mencoba-coba library baru atau menulis script debugging eksperimental langsung di dalam `src/`. Semua eksperimen WAJIB dilakukan di folder `scratch/` terlebih dahulu sebelum di-refactor ke codebase utama.

## 3. Type-Safety First
- TypeScript wajib digunakan di Frontend dan Backend (`strict: true`).
- Dilarang keras menggunakan type `any`. Gunakan `unknown` dengan Type Guard / Zod jika tipe data belum pasti.
- Semua API Request & Response Body WAJIB di-validate menggunakan **Zod**.

## 4. Backend Rules & Architecture (Hono.js / Next.js API + Drizzle ORM)
- **Modular Directory & Feature-Driven Architecture**:
  - Dilarang keras menumpuk semua route/endpoint API di dalam satu file monolithic (misal: `index.ts` atau `app.ts` raksasa).
  - Backend WAJIB menggunakan **Feature-Driven (Domain-Driven) Structure** atau **Modular Route Architecture**:
    ```text
    src/
    ├── modules/ (atau routes/)
    │   ├── auth/
    │   │   ├── auth.route.ts       # Hono sub-router / route handlers
    │   │   ├── auth.service.ts     # Business logic & authentication helpers
    │   │   └── auth.schema.ts      # Zod request/response validation schemas
    │   ├── users/
    │   │   ├── users.route.ts
    │   │   ├── users.service.ts
    │   │   └── users.schema.ts
    │   └── orders/
    ```
- **Backend File Line Limit (Max 250 Lines)**:
  - Setiap file route atau service **TIDAK BOLEH melebihi 200-250 baris kode**.
  - Jika file route berkembang (banyak endpoint), **WAJIB di-breakdown** menjadi sub-router terpisah (misal: `user-profile.route.ts`, `user-settings.route.ts`).
- **Separation of Concerns (Controller / Service / Repository Layer)**:
  - **Route Handler (Controller)**: Hanya menangani *input validation* (Zod) dan mengembalikan HTTP Response.
  - **Service Layer**: Mengolah *business logic* murni (perhitungan, pemrosesan data, integrasi third-party).
  - **Data Access Layer (Drizzle ORM)**: Pembacaan & penulisan database WAJIB dipisah atau diakses melalui ORM (`db.select()`, `db.insert()`).
- **Standardized API Response Format**:
  - Format response API WAJIB konsisten:
    ```ts
    type ApiResponse<T> = 
      | { success: true; data: T; error: null }
      | { success: false; data: null; error: { code: string; message: string } };
    ```

## 5. Frontend Rules & Architecture (Component Modularity & A11y)
- **Component Line Limit & Decomposition Rule**:
  - Ukuran file komponen React **TIDAK BOLEH melebihi 300 baris kode**.
  - Jika komponen melebihi 300 baris atau memiliki multiple sub-sections (misal: Form Modal, Complex Table Row, Filter Sidebar), **WAJIB di-breakdown** menjadi komponen-komponen kecil terpisah.
- **Aturan Lokasi & Penempatan Komponen (Scope-based Placement)**:
  - **Global Reusable Components** (`src/components/` atau `src/components/ui/`): Tempatkan di sini HANYA jika komponen digunakan secara umum di banyak modul/seluruh aplikasi (misal: `Button`, `Input`, `Modal`, `Navbar`, `Toast`).
  - **Feature / Module-Level Components** (`src/features/<feature-name>/components/` atau `src/app/<module>/_components/`): Jika komponen hanya dipakai khusus di dalam 1 atau 2 modul tertentu (misal: `CheckoutSummaryCard`, `UserProfileForm`), **WAJIB disimpan di folder komponen internal modul tersebut**, TIDAK BOLEH mengotori root `src/components/`.
- **Separation of Concerns (Custom Hooks)**:
  - Dilarang mencampur *complex state management* atau *data fetching logic* berlebihan di dalam file JSX/TSX komponen UI.
  - Pisahkan logika bisnis/fetching ke dalam **Custom Hooks** terpisah (`use<FeatureName>.ts`). Komponen UI hanya bertugas merender tampilan (Presentational Component).
- **Data Fetching Rule**:
  - Fetching data WAJIB menggunakan TanStack Query atau Server Actions. Dilarang menggunakan `useEffect` untuk data fetching.
- **Accessibility (A11y)**:
  - Elemen interaktif WAJIB accessible (ARIA labels, keyboard navigation focus states, semantic HTML tags `<main>`, `<nav>`, `<article>`, `<header>`).

## 6. Mandatory Automated Testing Rule (Unit, Integration & E2E)
- **Zero Untested Business Logic & Components**:
  - Setiap penambahan service, util/helper function, atau endpoint API baru WAJIB disertai minimal **Unit / Integration Test (Vitest)**.
  - **Frontend UI & Shared Components Wajib Di-test**:
    - Seluruh **Shared / Design System Components** (`src/components/ui/`, `src/components/`) WAJIB memiliki Unit / Component Test (Vitest + React Testing Library) untuk menguji rendering, props variant, user events (click, input), dan accessibility state.
    - Complex feature components (Form modal, multi-step wizards, interactive data tables) WAJIB dilindungi oleh integration component test.
  - Setiap alur user flow kritis (Auth, Checkout/Payment, Onboarding) WAJIB dilindungi oleh **End-to-End Test (Playwright)**.
- **Test Organization & Placement Strategy (Co-location vs Centralized)**:
  - **Co-location Pattern (Wajib untuk Unit, Service & Component Tests)**:
    - Seluruh file test unit/komponen WAJIB diletakkan **persis berdampingan** dengan file implementasinya (`*.test.ts` / `*.test.tsx`).
    - Contoh: `src/modules/auth/auth.service.ts` berdampingan dengan `src/modules/auth/auth.service.test.ts`, `src/components/ui/button.tsx` berdampingan dengan `src/components/ui/button.test.tsx`.
    - *Tujuan*: Mempertahankan domain encapsulation, memudahkan refactor, dan mengoptimalkan context awareness untuk AI Assistant.
  - **Centralized Pattern (Wajib untuk E2E & Cross-Module Journey)**:
    - Seluruh file Playwright E2E WAJIB disimpan terpusat di root folder `e2e/` (misal: `e2e/auth-flow.spec.ts`, `e2e/checkout-flow.spec.ts`).
- **Minimum Code Coverage Threshold**:
  - **Global / Shared UI Components, Utils & Services**: Minimal **≥ 80%** test coverage (*Lines, Branches, Functions, Statements*).
  - **Critical Modules (Auth, Payment/Checkout, Security/RBAC)**: Minimal **≥ 90%** test coverage.
  - Test runner WAJIB meng-enforce threshold via konfigurasi coverage (misal: `vitest.config.ts` -> `coverage.thresholds`).
- **TDD / Test-Alongside Development**:
  - Tulis test case bersamaan atau sebelum mengimplementasikan fitur (Edge cases, Happy paths, Error boundaries).
- **No Skipping or Disabling Tests**:
  - Dilarang keras mengomentari (*comment-out*), menghapus, atau mengabaikan (`test.skip`, `it.skip`) test yang failing untuk meloloskan build/CI tanpa investigasi akar masalah.
- **Pre-Commit / Pre-PR Test Verification**:
  - Seluruh test suite (`bun test` / `vitest run` & `playwright test`) WAJIB passing 100% dan memenuhi target coverage sebelum kode dianggap selesai dan di-commit.

## 7. Zero-Trust Security & OWASP Top 10 Defensive Guardrails
- **Authentication & Password Security**:
  - Dilarang menyimpan password/token mentah. Password WAJIB di-hash menggunakan **Argon2id** (pilihan utama) atau **Bcrypt (cost factor ≥ 12)**.
  - JWT Session WAJIB ditandatangani dengan algoritma kuat (`HS256`/`RS256`), masa berlaku pendek (max 15-60 menit), dan disimpan di **HttpOnly, Secure, SameSite=Strict/Lax Cookie** (DILARANG menyimpan JWT di `localStorage` / `sessionStorage` untuk mencegah XSS token theft).
- **Broken Access Control & IDOR Prevention**:
  - Setiap query/endpoint data sensitif (misal: `/api/orders/:id`) WAJIB memverifikasi kepemilikan data (Object-Level Authorization): `WHERE order.id = :id AND order.user_id = :current_user_id`. Dilarang mengandalkan ID dari client tanpa validasi session server.
- **SQL Injection (SQLi) & NoSQLi Protection**:
  - Dilarang keras menggunakan *Raw String Interpolation* atau *Concatenation* dalam query SQL (misal: `` `SELECT * FROM users WHERE email = '${email}'` ``).
  - Pembacaan & penulisan WAJIB melalui Drizzle ORM Parametrized Queries atau Prepared Statements.
- **XSS (Cross-Site Scripting) & Content Security Policy (CSP)**:
  - Gunakan `helmet` / Hono `secureHeaders()` middleware untuk memasang **Security Headers**: `Content-Security-Policy` (CSP), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, dan `Referrer-Policy`.
  - Sanitasi semua HTML output yang di-render dari input user (gunakan DOMPurify / sanitize-html). Dilarang `dangerouslySetInnerHTML` tanpa sanitasi ketat.
- **CSRF (Cross-Site Request Forgery) & CORS Tightening**:
  - Terapkan **CSRF Protection Middleware** (Anti-CSRF Tokens atau SameSite Cookies) untuk semua state-changing request (POST, PUT, DELETE, PATCH).
  - CORS WAJIB dikunci ke domain spesifik yang di-whitelisted via `.env`. **DILARANG keras menggunakan `Access-Control-Allow-Origin: *` di production**.
- **SSRF (Server-Side Request Forgery) & Input Sanitization**:
  - Jika API melakukan fetching ke URL eksternal berdasarkan input user, WAJIB memvalidasi URL terhadap IP Private / Loopback Whitelist (`127.0.0.1`, `10.0.0.0/8`, `192.168.0.0/16`, `metadata.google.internal`) untuk mencegah SSRF & Cloud Metadata Leak.
- **Rate Limiting & Anti-Brute Force / DoS**:
  - Terapkan Rate Limiting (misal: Hono Rate Limiter / Redis Slide Window) pada **semua endpoint public** (max 100 req/min) dan **endpoint sensitif Auth/Payment** (max 5-10 req/min) untuk mencegah Brute-Force & Credential Stuffing.
- **Secret Management & Zero Hardcoded Credentials**:
  - DILARANG keras meletakkan API Keys, DB Passwords, JWT Secrets, atau Private Keys di dalam source code.
  - Semua secret WAJIB divalidasi via Zod Schema di `src/env.ts` dan dipindai secara otomatis sebelum commit (`gitleaks` / pre-commit hook).
- **Audit Logging & Error Masking**:
  - Detail internal stack trace (misal: DB error message, file paths) **DILARANG dibocorkan ke HTTP Client**. Kembalikan pesan error generik (misal: "Internal Server Error") ke client, dan catat detail traceback asli HANYA di server log terenkripsi (Sentry / Structured JSON Log).

## 8. Database Naming & Migration Rules
- **Naming Convention**: Gunakan `snake_case` untuk nama tabel dan kolom di database (misal: `user_profiles`, `created_at`).
- **Migration Safeguard**: Dilarang mengubah file migrasi SQL yang sudah di-commit/dijalankan di production. Selalu buat file migrasi baru via `drizzle-kit generate`.
- **Soft Delete Pattern**: Untuk data penting (User, Transaction, Order), rekomendasikan kolom `deleted_at: timestamp` daripada hard DELETE fisik.

## 9. Memory Auto-Update Rule
Di akhir setiap sesi penyelesaian tugas, AI WAJIB memperbarui file `MEMORY.md` dengan status progress terbaru, keputusan arsitektur (ADR) baru, dan daftar next steps.
