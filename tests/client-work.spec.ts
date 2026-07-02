import { test, expect } from '@playwright/test';

test('navigate to Client Work from Services', async ({ page }) => {
  await page.goto('https://www.epam.com/');
});