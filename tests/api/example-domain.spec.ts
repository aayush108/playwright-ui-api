import { expect, test } from "@playwright/test";

test.describe("Example Domain API smoke test", () => {
  test("GET / returns successful HTML response", async ({ request, baseURL }) => {
    const response = await request.get(baseURL ?? "https://example.com");

    expect(response.ok()).toBeTruthy();

    const body = await response.text();
    expect(body).toContain("Example Domain");
  });
});
