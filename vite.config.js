import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 1. Позволяет слушать все сетевые интерфейсы, а не только 127.0.0.1
    host: '0.0.0.0', 
    
    // 2. Явно указываем порт, если VPN блокирует стандартный 5173
    port: 5173,

    // 3. Настройка HMR (самое важное для работы через VPN/прокси)
    hmr: {
      // Укажите localhost или 127.0.0.1, чтобы WebSocket-соединение 
      // шло в обход туннеля VPN напрямую к вашей машине
      host: 'localhost',
      protocol: 'ws'
    },

    // 4. Если файлы не обновляются сами, включите опрос (polling)
    watch: {
      usePolling: true,
      interval: 100
    }
  }
})
