import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true, // 브라우저 자동 실행
    port: 3000, // 포트 번호 설정
    history: {
      // 기본 URL을 /guide로 설정
      disableDotRule: true,
      fallback: '/guide',
    },
  },
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    devSourcemap: true, // 개발 과정 중에서 CSS 소스 맵을 활성화
  },
})
