---
name: skill-monitoring-sentry
description: "Prosedur integrasi error tracking Sentry & structured JSON logging untuk produksi."
---

# Skill Procedure: Production Monitoring & Observability

1. Pasang Sentry SDK di Backend Hono dan Frontend React.
2. Buat error handler middleware Hono untuk menangkap unhandled exceptions dan mengirimnya ke Sentry:
   ```ts
   app.onError((err, c) => {
     const requestId = c.get('requestId');
     Sentry.captureException(err, { tags: { requestId } });
     return c.json({
       success: false,
       data: null,
       error: { code: 'INTERNAL_ERROR', message: 'Internal Server Error' },
     }, 500);
   });
   ```
3. Gunakan structured JSON logger dengan request ID dan redaction untuk secret, token, cookie, authorization header, serta PII sensitif.
4. Verifikasi response client tidak mengandung stack trace atau internal error detail dan event server tetap dapat dikorelasikan melalui request ID.
