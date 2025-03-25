import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  
  base: "/MOAI-Website-Components-Clone/",

  plugins: [react()],
});
