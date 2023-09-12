import { test, expect } from '@playwright/test';

test('has h1', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const header = page.locator('h1')

  // Expect a title "to contain" a substring.
  await expect(header).toHaveText("Hello, World 2022!")
});

test('has h2', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const header = page.locator('h2')

  // Expect a title "to contain" a substring.
  await expect(header).toHaveText("Hello, World 2023!")
});

test('has h3', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const header = page.locator('h3')

  // Expect a title "to contain" a substring.
  await expect(header).toHaveText("Hello, World 2023!")
});

test('has h4', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const header = page.locator('h4')

  // Expect a title "to contain" a substring.
  await expect(header).toHaveText("Hello, World 2023!")
});


