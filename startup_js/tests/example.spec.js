import { test, expect } from '@playwright/test';

test('testWelcomeButton', async ({ page }) => {
  // Navigate to the welcome page
  await page.goto('http://localhost:8080/');

  // Get the target element and make sure it is in the correct starting state
  const brand = page.getByTestId('msg');
  await expect(brand).toHaveText('SnapFeed');

  // Press the button
  const changeBtn = page.getByRole('button', { name: 'Login' });
  await changeBtn.click();

  // Expect that the change ahppened correctly
  //await expect(brand).toHaveText('I feel not welcomed');
});