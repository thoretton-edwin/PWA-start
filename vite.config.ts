import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  base: '/',
  build: {
    sourcemap: true,
    assetsDir: 'code',
  },
  plugins: [
    viteTsConfigPaths({
      root: './',
    }),
    reactRefresh(),
  ],
});
