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

// import { defineConfig, loadEnv } from 'vite';
// import vue from '@vitejs/plugin-vue'  // 必须确保这一行存在且路径正确

// export default defineConfig(({ mode }) => ({
//   base: mode === 'production' ? '/DFSC/' : '/',
//   plugins: [
//     vue(),
//     mode === 'development' && vueDevTools(),
//     AutoImport({
//       imports: ['vue', 'vue-router'],
//       resolvers: [ElementPlusResolver()],
//     }),
//     Components({
//       resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
//     }),
//   ].filter(Boolean),
//   resolve: {
//     alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@use "@/styles/variables.scss" as *;`,
//       },
//     },
//   },
//   build: {
//     outDir: 'dist',
//     assetsDir: 'assets',
//     rollupOptions: {
//       output: {
//         chunkFileNames: 'assets/js/[name]-[hash].js',
//         assetFileNames: 'assets/[ext]/[name]-[hash][extname]',
//       },
//     },
//   },
// }));



import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'  // 关键点：确保这一行存在
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),  // 确保这里调用了 vue() 插件
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  base: process.env.NODE_ENV === 'production' ? '/web_dfsc222/' : '/',
  // base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})