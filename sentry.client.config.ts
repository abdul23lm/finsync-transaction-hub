import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://e26225a10c6118d3c7deee289ef77098@o518182.ingest.us.sentry.io/4508714611507200",
  tracesSampleRate: 1,
  debug: false,

  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
