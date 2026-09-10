import { defineConfig } from 'vitest/config';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';
export default defineConfig({
  plugins: [svgr({ include: '**/packages/ui/src/**/*.svg' })],
  resolve: { dedupe: ['react', 'react-dom'], alias: { '@modfly/ui-avamec': path.resolve('packages/ui-avamec/src/index.ts'), '@modfly/ui': path.resolve('packages/ui/src/index.ts') } },
  test: { include: ['tests/**/*.test.{ts,tsx}'], environment: 'jsdom', setupFiles: ['tests/setup.ts'], testTimeout: 15000 },
});
