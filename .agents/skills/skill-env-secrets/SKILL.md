---
name: skill-env-secrets
description: "Prosedur validasi environment variables & secret management menggunakan Zod Schema saat startup."
---

# Skill Procedure: Type-Safe Environment Variables Validation

1. Baca architecture profile aktif untuk menentukan server dan client environment boundaries.
2. Buat server-only environment adapter pada server root yang dipilih. Jika ada browser bundle, buat adapter public/client terpisah dan hanya izinkan variabel dengan prefix publik framework.
3. Definikan Zod Schema untuk variabel server:
   ```ts
   import { z } from 'zod';
   export const envSchema = z.object({
     DATABASE_URL: z.string().url(),
     JWT_SECRET: z.string().min(32),
     NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
   });
   export const env = envSchema.parse(process.env);
   ```
4. Hanya adapter tervalidasi yang boleh membaca `process.env` atau `import.meta.env` secara langsung. Jangan pernah mengimpor adapter server ke client bundle.
5. Tambahkan `.env.example` tanpa nilai secret dan verifikasi aplikasi gagal saat startup jika konfigurasi wajib tidak valid.
