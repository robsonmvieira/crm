import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { alias } from './alias'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ['./vitest-setup.ts'],
    reporters: ['verbose'],
    environment: 'jsdom',
    include: ['src/**/*.{spec,test}.{js,ts,jsx,tsx}'],
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*.{ts,jsx,tsx}'],
      exclude: [
        'src/**/components/ui/**/*.{ts,jsx,tsx}',
        'src/**/layout.tsx',
        'src/lib/*',
        'src/**/*.e2e-spec.ts'
      ],
      reporter: ['text', ['html', { subdir: 'coverage' }]]
    }
  },
  resolve: {
    alias
  }
})
