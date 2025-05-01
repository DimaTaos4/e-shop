import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  preview: {
    host: true,
    port: 3000,
    allowedHosts: ['all'] // Разрешаем все хосты (не нужно добавлять каждый новый)
  }
})