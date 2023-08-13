import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/before/home.html');

  await expect(page).toHaveTitle(/CityLights/);

  const navigation = page.getByRole("navigation");

  await navigation.getByRole("link", { name: "Home", exact: true }).focus();
  await expect(navigation.getByRole("link", { name: "Home", exact: true } )).toBeFocused();

  await page.keyboard.press("Tab");
  await expect(navigation.getByRole("link", {name: "News", exact: true })).toBeFocused();
});
