import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const openaiKey = env.OPENAI_API_KEY || env.VITE_OPENAI_API_KEY || ''
  const geminiKey = env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY || ''
  const openaiModel = env.OPENAI_MODEL || env.VITE_OPENAI_MODEL || 'gpt-5.4-mini'
  const geminiModel = env.GEMINI_MODEL || env.VITE_GEMINI_MODEL || 'gemini-flash-latest'

  return {
    plugins: [react()],
    server: {
      port: 3000,
      open: true
    },
    define: {
      '__OPENAI_API_KEY__': JSON.stringify(openaiKey),
      '__GEMINI_API_KEY__': JSON.stringify(geminiKey),
      '__OPENAI_MODEL__': JSON.stringify(openaiModel),
      '__GEMINI_MODEL__': JSON.stringify(geminiModel),
      'process.env.OPENAI_API_KEY': JSON.stringify(openaiKey),
      'process.env.GEMINI_API_KEY': JSON.stringify(geminiKey),
      'process.env.OPENAI_MODEL': JSON.stringify(openaiModel),
      'process.env.GEMINI_MODEL': JSON.stringify(geminiModel),
    }
  }
})
