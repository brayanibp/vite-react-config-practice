import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/';
const CAT_IMAGE_URL_PREFIX = 'https://cataas.com/';

test('Has content title', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const contentTitle = page.locator('h1');
  // Expect a title "to contain" a substring.
  await expect(contentTitle).toHaveText('App de gatitos');
});

test('App shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // Click the get started link.
  const text = page.getByRole('paragraph');
  const image = page.getByRole('img');

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');

  // Expects page to have a heading with the name of Installation.
  expect(textContent?.length).toBeGreaterThan(0);
  expect(imageSrc?.startsWith(CAT_IMAGE_URL_PREFIX)).toBeTruthy();
});
