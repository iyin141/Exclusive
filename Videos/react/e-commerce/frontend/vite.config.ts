import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Pages from "vite-plugin-pages";
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),
    react(),
     Pages({
      dirs: "src/pages", 
      extensions: ["tsx"], 
    }),
  ],
    server: {
      proxy: {
        '/api': 'http://localhost:5000', // Proxy API requests to the backend server
      },
    },
})
