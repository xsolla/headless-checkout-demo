/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rollupReplace from '@rollup/plugin-replace';
import * as path from 'path';

export default defineConfig(({ mode }) => ({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
    exclude: ['e2e', 'node_modules'],
  },
  plugins: [
    // Problem with types in the package https://github.com/rollup/plugins/issues/1541
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    rollupReplace({
      preventAssignment: true,
      values: {
        __DEV__: JSON.stringify(true),
        'process.env.NODE_ENV': JSON.stringify('development'),
      },
    }),
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: mode === 'development',
              fileName: mode === 'development',
              ssr: false,
              pure: false,
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@translations': path.resolve(__dirname, './src/translations'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },
}));
