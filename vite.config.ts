import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // GitHub Pagesのリポジトリ名に合わせる
  server: {
    host: '0.0.0.0',  // すべてのネットワークインターフェースでリッスン
    port: 5181,       // ポートを固定
    proxy: {
      '/api': 'http://localhost:5180'
    },
    hmr: {
      overlay: false
    }
  },
  publicDir: 'public',  // 静的アセットディレクトリを明示的に設定
})
