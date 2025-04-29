//import { resolve } from 'path';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import viteConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ts-lib-vite',
    },
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@types': path.resolve(__dirname, 'src/types'),
      // '@utils': resolve(__dirname, '/src/utils')
    },
  },
  plugins: [
    dts({ outDir: 'dist', exclude: ['**/*.(test|spec).tsx?', 'test/'] }),
    viteConfigPaths(),
  ],
});
