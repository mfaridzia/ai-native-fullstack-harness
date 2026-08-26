---
name: skill-db-migration
description: "Prosedur migrasi database schema menggunakan Drizzle ORM & Drizzle Kit."
---

# Skill Procedure: Database Schema Migration

1. Baca profile/plan aktif untuk menentukan schema root, database driver, migration directory, dan package manager.
2. Ubah schema modular pada lokasi yang ditentukan plan; jangan mengubah migration yang sudah pernah diterapkan.
3. Jalankan script Drizzle generate melalui package manager aktif dan periksa SQL yang dihasilkan, constraint, index, serta potensi destructive change.
4. Terapkan migration hanya ke database development/test yang targetnya sudah diverifikasi. Jangan menjalankan migration production tanpa permintaan dan otorisasi eksplisit.
5. Jalankan schema/typecheck/test terkait dan laporkan migration file serta risiko rollback.
