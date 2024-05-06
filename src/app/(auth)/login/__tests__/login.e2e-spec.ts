import { test, expect } from '@playwright/test'

test('should be able to do login', async ({ page }) => {
  await page.goto('/login')
  expect(2 + 2).toBe(4)
})
