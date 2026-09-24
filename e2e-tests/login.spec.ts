import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('should display the login form and account links', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Log in to Tailspin Toys' })).toBeVisible();
    await expect(page.getByLabel('Email address')).toHaveAttribute('type', 'email');
    await expect(page.getByLabel('Password')).toHaveAttribute('type', 'password');
    await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Forgot password?' })).toHaveAttribute('href', '/login');
    await expect(page.getByRole('link', { name: 'Create an account' })).toHaveAttribute('href', '/login');
  });

  test('should expose required fields for keyboard and assistive technology users', async ({ page }) => {
    await expect(page.getByLabel('Email address')).toHaveAttribute('required', '');
    await expect(page.getByLabel('Password')).toHaveAttribute('required', '');
    await expect(page.getByLabel('Email address')).toHaveAttribute('autocomplete', 'email');
    await expect(page.getByLabel('Password')).toHaveAttribute('autocomplete', 'current-password');
  });
});
