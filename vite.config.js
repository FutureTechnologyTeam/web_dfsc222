// import { fileURLToPath, URL } from 'node:url'
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// // https://vite.dev/config/
// export default defineConfig({
//   server: {
//     open: true
//   },
//   plugins: [
//     vue(),
//     vueDevTools(),
//     AutoImport({
//       imports:['vue', 'vue-router'],
//       resolvers: [ElementPlusResolver()],
//     }),
//     Components({
//       resolvers: [ElementPlusResolver()],
//     }),
//   ],
//   base: process.env.NODE_ENV === 'production' ? '/DFSC/' : '/',
//   // base:'./',
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     },
//   },
// })

import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/DFSC/' : '/',
  plugins: [
    vue(),
    mode === 'development' && vueDevTools(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
  ].filter(Boolean),
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss" as *;`,
      },
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash][extname]',
      },
    },
  },
}));