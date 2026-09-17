import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import type { Connect } from 'vite';
import type { IncomingMessage, ServerResponse } from 'http';
import pkg from './package.json' with { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ✅ Плагин с правильной типизацией
function spaFallbackPlugin(): Plugin {
  return {
    name: 'spa-fallback',
    configureServer(server) {
      // Возвращаем функцию для middleware
      return () => {
        server.middlewares.use(
          (
            req: IncomingMessage,
            res: ServerResponse,
            next: Connect.NextFunction,
          ) => {
            // Пропускаем запросы к статическим файлам и API
            if (
              req.url?.includes('.') ||
              req.url?.startsWith('/@') ||
              req.url?.startsWith('/api')
            ) {
              return next();
            }
            // Перенаправляем все остальные запросы на index.html
            req.url = '/';
            next();
          },
        );
      };
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaFallbackPlugin()],
  optimizeDeps: {
    include: ['use-visitor-location'], // Принудительно включить пакет в предварительную сборку
  },
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        // Автоматический импорт глобальных файлов
        additionalData: `
          @use "@/styles/variables.scss" as *;
          @use "@/styles/mixins.scss" as *;
        `,
      },
    },
    modules: {
      // Настройка CSS Modules
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]--[hash:base64:5]',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  server: {
    host: '0.0.0.0', // Важно для доступа из контейнера
    port: 9999,
    watch: {
      usePolling: true, // Для Docker на Windows/Mac
    },
  },
  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(pkg.version),
  },
});
