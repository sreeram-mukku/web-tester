import { test, expect } from '@playwright/test';

test('navigate to Client Work from Services', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  const headerServices = page.getByRole('button').first();
  await headerServices.click();

  const servicesLink = page.getByRole('link', { name: /^Services$/i }).first();
  await expect(servicesLink).toBeVisible();
  await servicesLink.click();

  const exploreClientWorkLink = page.getByRole('link', { name: /Explore Our Client Work/i }).first();
  await expect(exploreClientWorkLink).toBeVisible();
  await exploreClientWorkLink.click();

  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});
