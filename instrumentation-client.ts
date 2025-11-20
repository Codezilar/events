import posthog from "posthog-js"

// Read the PostHog key into a local constant and trim whitespace.
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY?.trim() ?? "";

// Flag downstream code can import to quickly check whether PostHog was initialized.
export const isPostHogEnabled = POSTHOG_KEY.length > 0;

if (isPostHogEnabled) {
  // Only call init when we have a non-empty key.
  posthog.init(POSTHOG_KEY, {
    api_host: "/ingest",
    ui_host: "https://eu.posthog.com",
    defaults: '2025-05-24',
    capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
    debug: process.env.NODE_ENV === "development",
  });
} else {
  // Warn in non-production environments that PostHog was not configured.
  // Downstream code should check `isPostHogEnabled` before calling posthog methods
  // if they require PostHog to be active.
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.warn(
      "PostHog not initialized: NEXT_PUBLIC_POSTHOG_KEY is not set. Skipping analytics initialization."
    );
  }
}

export default posthog
