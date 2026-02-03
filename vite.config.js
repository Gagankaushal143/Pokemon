import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),tailwindcss()
  ],server: {
    host: true, // This exposes the project on your local network
    port: 5173, // You can specify a fixed port if you like
  }
})
