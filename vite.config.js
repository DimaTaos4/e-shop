import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // <-- добавь это, если сайт не загружается
  preview: {
    host: true,
    port: 3000,
    allowedHosts: ['e-shop-5-9782.onrender.com']
  }
})
