import js from '@eslint/js';
import ts from 'typescript-eslint';
import hooks from 'eslint-plugin-react-hooks';
export default ts.config(
  { ignores: ['**/dist/**', '**/node_modules/**', '**/.next/**', '**/storybook-static/**', '**/*.d.ts'] },
  js.configs.recommended,
  ...ts.configs.recommended,
  { languageOptions: { globals: { console: 'readonly', window: 'readonly', document: 'readonly', navigator: 'readonly', localStorage: 'readonly', URL: 'readonly', URLSearchParams: 'readonly', fetch: 'readonly', process: 'readonly', Buffer: 'readonly', setTimeout: 'readonly', clearTimeout: 'readonly', setInterval: 'readonly', clearInterval: 'readonly', requestAnimationFrame: 'readonly', cancelAnimationFrame: 'readonly', ResizeObserver: 'readonly', HTMLElement: 'readonly' } }, rules: { '@typescript-eslint/no-explicit-any': 'off', '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }], 'no-undef': 'off' } },
  { files: ['**/*.{ts,tsx}'], plugins: { 'react-hooks': hooks }, rules: { 'react-hooks/rules-of-hooks': 'error' } }
);
