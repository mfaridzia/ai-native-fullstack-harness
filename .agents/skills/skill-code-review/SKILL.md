---
name: skill-code-review
description: "Prosedur audit kualitas kode, strict type-safety, memory leaks check, dan refactoring suggestion."
---

# Skill Procedure: Code Review & Quality Audit

1. Baca profile aktif. Jika repository sudah memiliki application scaffold, jalankan script typecheck/lint/test relevan melalui package manager aktif; untuk meta-boilerplate documentation-only, validasi konsistensi rules, agents, skills, templates, dan links tanpa menganggap aplikasi harus runnable.
2. Cari dan tandai jika ada penggunaan `any` atau `@ts-ignore`.
3. Verifikasi bahwa setiap `catch` block mencatat log atau menangani error secara eksplisit.
4. Pastikan tidak ada credential/secret key yang di-hardcode.
5. Laporkan temuan berdasarkan dampak dan bedakan bug/kontradiksi dari pilihan profile yang memang disengaja.
