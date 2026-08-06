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

## 6. Error Handling & Security Guardrails
- **No Silent Try-Catch / Swallowing Errors**: Dilarang menangkap error dengan `try-catch` kosong atau me-return data dummy tanpa mencatat (*logging*) error yang jelas.
- **Unified Error Handler**: Backend WAJIB menggunakan Centralized Error Handler (misal: `app.onError` di Hono) dan mengembalikan status code HTTP yang sesuai (400, 401, 403, 404, 500).
- **OWASP Top 10 Guardrails**: Dilarang menyimpan password mentah (wajib Argon2/Bcrypt), pastikan CORS dikonfigurasi secara ketat (*no wildcard `*` in production*), dan terapkan Rate Limiting di endpoint sensitif (Auth, Payment).

## 7. Database Naming & Migration Rules
- **Naming Convention**: Gunakan `snake_case` untuk nama tabel dan kolom di database (misal: `user_profiles`, `created_at`).
- **Migration Safeguard**: Dilarang mengubah file migrasi SQL yang sudah di-commit/dijalankan di production. Selalu buat file migrasi baru via `drizzle-kit generate`.
- **Soft Delete Pattern**: Untuk data penting (User, Transaction, Order), rekomendasikan kolom `deleted_at: timestamp` daripada hard DELETE fisik.

## 8. Automated Testing Guardrails
- **Unit & Integration Test**: Setiap service/helper function baru dengan logika kompleks WAJIB disertai Unit Test (Vitest).
- **No Skipping Tests**: Dilarang mengomentari (*comment-out*) atau mengabaikan (`test.skip`) test yang failing tanpa alasan teknis dan persetujuan eksplisit.

## 9. Memory Auto-Update Rule
Di akhir setiap sesi penyelesaian tugas, AI WAJIB memperbarui file `MEMORY.md` dengan status progress terbaru, keputusan arsitektur (ADR) baru, dan daftar next steps.
