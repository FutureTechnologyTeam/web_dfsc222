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
//   base: process.env.NODE_ENV === 'production' ? '/web_dfsc222/' : '/',
//   // base:'/',
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



// import { fileURLToPath, URL } from 'node:url'
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'  // 关键点：确保这一行存在
// import vueDevTools from 'vite-plugin-vue-devtools'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// export default defineConfig({
//   plugins: [
//     vue(),  // 确保这里调用了 vue() 插件
//     vueDevTools(),
//     AutoImport({
//       resolvers: [ElementPlusResolver()],
//     }),
//     Components({
//       resolvers: [ElementPlusResolver()],
//     }),
//   ],
//   // base: process.env.NODE_ENV === 'production' ? '/web_dfsc222/' : '/',
//   // base: './',
//   base: '/web_dfsc222/',
//   build: {
//     rollupOptions: {
//       output: {
//         // 使用绝对路径
//         chunkFileNames: 'web_dfsc222/assets/[name]-[hash].js',
//         assetFileNames: 'web_dfsc222/assets/[name]-[hash][extname]',
//         // 避免中文文件名
//         sanitizeFileName: (name) => name.replace(/[\u4e00-\u9fa5]/g, '')
//       }
//     }
//   },
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })
// import { fileURLToPath, URL } from 'node:url';
// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
// import vueDevTools from 'vite-plugin-vue-devtools';
// import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// export default defineConfig({
//   plugins: [
//     vue(),  // Vue 插件
//     vueDevTools(),  // Vue DevTools 插件
//     AutoImport({
//       resolvers: [ElementPlusResolver()],  // 自动导入 Element Plus 组件
//     }),
//     Components({
//       resolvers: [ElementPlusResolver()],  // 自动注册 Element Plus 组件
//     }),
//   ],
//   base: '/web_dfsc222/',  // 部署的基础路径
//   build: {
//     rollupOptions: {
//       output: {
//         // 配置生成的代码块文件名
//         chunkFileNames: 'assets/[name]-[hash].js',
//         // 配置生成的静态资源文件名
//         assetFileNames: 'assets/[name]-[hash][extname]',
//         // 避免文件名中包含中文字符
//         sanitizeFileName: (name) => name.replace(/[\u4e00-\u9fa5]/g, ''),
//       },
//     },
//   },
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url)),  // 设置别名，方便导入
//     },
//   },
// });

// import { fileURLToPath, URL } from 'node:url';
// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
// import vueDevTools from 'vite-plugin-vue-devtools';
// import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// export default defineConfig({
//   plugins: [
//     vue(),
//     vueDevTools(),
//     AutoImport({
//       resolvers: [ElementPlusResolver()],
//     }),
//     Components({
//       resolvers: [ElementPlusResolver()],
//     }),
//   ],
//   base: '/web_dfsc222/',
//   build: {
//     rollupOptions: {
//       output: {
//         chunkFileNames: 'assets/[name]-[hash].js',
//         assetFileNames: 'assets/[name]-[hash][extname]',
//         sanitizeFileName: (name) => name.replace(/[\u4e00-\u9fa5]/g, '').replace(/\x00/g, ''),
//       },
//     },
//   },
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url)),
//     },
//   },
// });


import { fileURLToPath, URL } from 'node:url'
// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// export default defineConfig({
//   server: {
//     open: true,
//     // 可选的代理配置
//     proxy: {
//       '/api': {
//         target: 'http://your-api-server.com',
//         changeOrigin: true,
//       }
//     }
//   },
//   plugins: [
//     vue(),
//     vueDevTools(),
//     AutoImport({
//       imports: ['vue', 'vue-router'],
//       resolvers: [ElementPlusResolver()],
//     }),
//     Components({
//       resolvers: [ElementPlusResolver()],
//     }),
//   ],
//   // 动态设置 base，生产环境用 /web_dfsc222/，开发环境用 /
//   // base: './',
//   base: process.env.NODE_ENV === 'production' ? '/web_dfsc222/' : '/',
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })



import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // 加载环境变量（支持 .env 文件）
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  
  return {
    server: {
      open: true,
      proxy: {
        '/api': {
          target: 'http://your-api-server.com',
          changeOrigin: true,
        }
      }
    },
    plugins: [
      vue(),
      vueDevTools(),
      AutoImport({
        imports: ['vue', 'vue-router'],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    // 优先级：环境变量 > 默认值
    base: env.VITE_BASE_URL || (mode === 'production' ? '/web_dfsc222/' : '/'),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  };
});