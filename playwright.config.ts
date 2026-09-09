import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests/browser', timeout: 60000, fullyParallel: false, workers: 2,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: { baseURL: 'http://localhost:3020', trace: 'retain-on-failure', screenshot: 'only-on-failure' },
  projects: [{ name:'chromium', use:{ ...devices['Desktop Chrome'] } }],
  webServer: { command: 'pnpm --filter docs start --port 3020', url:'http://localhost:3020', reuseExistingServer: !process.env.CI, timeout:60000 },
});
