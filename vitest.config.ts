import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { alias } from './alias'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom'
  },
  resolve: {
    alias
  }
})