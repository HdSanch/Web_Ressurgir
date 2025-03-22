import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // ✅ Importar el plugin de React
import path from 'path';

export default defineConfig({
  plugins: [react()], // ✅ Ahora `react()` está definido
  base: './', // Cambia a '/' si no se renderizan correctamente los assets
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@images': path.resolve(__dirname, 'assets/images'),
      '@icons': path.resolve(__dirname, 'assets/icons')
    },
  },
});
