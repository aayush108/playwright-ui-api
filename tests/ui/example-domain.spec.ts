import { expect, test } from "@playwright/test";

test.describe("Example Domain UI smoke test", () => {
  test("renders expected heading and title", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Example Domain/i);
    await expect(page.getByRole("heading", { name: "Example Domain" })).toBeVisible();
  });
});
