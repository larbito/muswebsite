// Build step: precompile the JSX components in tvdyalek/ to plain browser JS.
//
// The site is a classic-script React app (no bundler, no ES modules). Each file
// runs in its OWN isolated scope: it reads shared data via `window.TVD`, defines
// its components, then publishes them with `Object.assign(window, {...})`. The
// original in-browser Babel gave each <script type="text/babel"> that isolation.
// To reproduce it we compile JSX (sourceType:"script") and then wrap every file
// in an IIFE, so each file's top-level `const`/`function` stays file-local
// (preventing cross-file redeclaration collisions, e.g. `const { PLANS } = ...`
// in two files) while the explicit window assignments still share symbols.
//
//   npm install   # once, to get the devDependencies
//   npm run build # regenerates tvdyalek/*.js from tvdyalek/*.jsx
import babel from '@babel/core';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const DIR = join(dirname(fileURLToPath(import.meta.url)), 'tvdyalek');

// Order is documentation only; each file compiles independently.
const FILES = [
  'tweaks-panel',
  'sections-top',
  'sections-mid',
  'checkout',
  'sections-conv',
  'extras',
  'app',
];

for (const name of FILES) {
  const src = readFileSync(join(DIR, `${name}.jsx`), 'utf8');
  const { code } = babel.transformSync(src, {
    filename: `${name}.jsx`,
    sourceType: 'script',
    presets: [['@babel/preset-react', { runtime: 'classic' }]],
    compact: false,
    comments: true,
  });
  const wrapped = `(function () {\n${code}\n})();\n`;
  writeFileSync(join(DIR, `${name}.js`), wrapped);
  console.log(`compiled ${name}.jsx -> ${name}.js`);
}
console.log('Build complete.');
