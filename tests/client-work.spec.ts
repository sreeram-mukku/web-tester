import { test, expect } from '@playwright/test';

test.describe('EPAM Client Work navigation', () => {
  test('opens Client Work from the Services menu', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    await page.getByRole('link', { name: 'Services', exact: true }).click();

    await expect(page.getByRole('heading', { name: 'Services', level: 1 })).toBeVisible();

    await page.getByRole('link', { name: 'Explore Our Client Work', exact: true }).click();

    await expect(page).toHaveURL(/\/services\/client-work$/);
    await expect(page.getByRole('heading', { name: 'Client Work', level: 1 })).toBeVisible();
    await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
  });
});