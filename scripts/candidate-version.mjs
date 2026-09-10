import { readFile, writeFile } from 'node:fs/promises';
const suffix = process.env.GITHUB_RUN_NUMBER ?? 'local';
for (const name of ['ui','ui-avamec','cli']) {
  const file = `packages/${name}/package.json`;
  const pkg = JSON.parse(await readFile(file,'utf8'));
  pkg.version = `${pkg.version.split('-')[0]}-rc.${suffix}`;
  await writeFile(file,JSON.stringify(pkg,null,2)+'\n');
}
