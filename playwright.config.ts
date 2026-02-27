import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.BASE_URL ?? "https://example.com";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  projects: [
    {
      name: "api",
      testMatch: /tests\/api\/.*\.spec\.ts/
    },
    {
      name: "chromium",
      testMatch: /tests\/ui\/.*\.spec\.ts/,
      use: { ...devices["Desktop Chrome"] }
    },
    {
      name: "firefox",
      testMatch: /tests\/ui\/.*\.spec\.ts/,
      use: { ...devices["Desktop Firefox"] }
    },
    {
      name: "webkit",
      testMatch: /tests\/ui\/.*\.spec\.ts/,
      use: { ...devices["Desktop Safari"] }
    }
  ]
});
