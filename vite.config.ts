import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(({command,mode}) =>{
  const config = loadEnv(mode,'./')
  return {
    plugins: [
      vue(),
      vueJsx(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      cors: true, 
      open: true, 
      proxy: {
        '/api': {
          // target: 'http://localhost/3000',
          target: config.VITE_BASE_URL, 
          changeOrigin: true,
          ws: true,  
          rewrite: (path) => path.replace(/^\/api/, '') 
        }
      }
    }
  }
})
