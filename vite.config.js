import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  included: ["lottie-react/dist/lottie-react.css"],
  test : {
    globals : true,
    environment : "jsdom",
    css : true,
    
  }
})
