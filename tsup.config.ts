import { defineConfig } from 'tsup';

const globalName = 'helper';

export default defineConfig({
  splitting: false,
  sourcemap: true,
  minify: true,
  clean: true,
  target: 'es5',
  dts: true,
  // legacyOutput: true,
  platform:'browser',
  entry: ['src/index.ts'],
  format: [
    'cjs',
    'esm',
    'iife'
  ],
  globalName,
  esbuildOptions: (options, context) => {
    let js;
    if (context.format === 'cjs') {
      js = 'module.exports = module.exports.default;';
    }

    if (context.format === 'iife') {
      js = `window["${globalName}"] = window["${globalName}"].default;`
    }

    if (js) {
      options.footer = { js };
    }
  }
});
