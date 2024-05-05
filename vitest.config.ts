import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { alias } from './alias'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{spec,test}.{js,ts,jsx,tsx}'], // Especifica onde os arquivos de teste estão localizados
    coverage: {
      provider: 'istanbul', // ou 'istanbul', dependendo do que você preferir
      include: ['src/**/*.{ts,jsx,tsx}'], // Inclui apenas arquivos dentro de src para cobertura
      exclude: [
        'src/**/components/ui/**/*.{ts,jsx,tsx}',
        'src/**/layout.tsx',
        'src/lib/*',
        'src/**/*.e2e-spec.ts'
      ], // Inclui apenas
      reporter: ['text', ['html', { subdir: 'coverage' }]]
    }
  },
  resolve: {
    alias
  }
})
