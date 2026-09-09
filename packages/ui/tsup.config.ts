import { defineConfig } from 'tsup';
import svgr from 'esbuild-plugin-svgr';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export default defineConfig({
  entry: ['src/index.ts'], format: ['cjs', 'esm'], dts: true, clean: true,
  external: ['react', 'react-dom'], minify: true,
  banner: { js: '"use client";' },
  loader: { '.png': 'dataurl', '.jpg': 'dataurl', '.jpeg': 'dataurl', '.webp': 'dataurl' },
  esbuildPlugins: [{ name: 'svg-url', setup(build) {
    build.onResolve({ filter: /\.svg\?url$/ }, args => ({ path: path.resolve(args.resolveDir, args.path.slice(0, -4)), namespace: 'svg-url' }));
    build.onLoad({ filter: /.*/, namespace: 'svg-url' }, async args => ({ contents: `export default ${JSON.stringify('data:image/svg+xml;base64,' + (await readFile(args.path)).toString('base64'))}`, loader: 'js' }));
  } }, svgr({ filter: /\.svg$/ })],
});
