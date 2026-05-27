import { defineConfig } from 'tsup';
import svgr from 'esbuild-plugin-svgr';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom'],
  minify: true,
  esbuildPlugins: [svgr()],
});
