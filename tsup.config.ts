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
    'iife' // 这个的作用就是打包 umd 格式
  ],
  globalName,
  esbuildOptions: (options, context) => {
    let js;
    // 默认导出的内容是存放在 module.exports.default
    // 这里在打包后的文件最后面重新设置 module.exports
    if (context.format === 'cjs') {
      js = 'module.exports = module.exports.default;';
    }
    // 同上，这个是给浏览器环境使用
    if (context.format === 'iife') {
      js = `window["${globalName}"] = window["${globalName}"].default;`
    }

    if (js) {
      options.footer = { js };
    }
  }
});