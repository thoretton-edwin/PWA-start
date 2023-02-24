import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    sourcemap: true,
    assetsDir: "code",
  },
  plugins: [
    viteTsConfigPaths({
      root: './',
    }),
    reactRefresh(),
    VitePWA({
      strategies: "injectManifest",
      injectManifest: {
        swSrc: 'public/sw.js',
        swDest: 'dist/sw.js',
        globDirectory: 'dist',
        globPatterns: [
          '**/*.{html,js,css,json, png}',
        ],
      },
      devOptions: {
        enabled: true
      }
    })
  ]
})
