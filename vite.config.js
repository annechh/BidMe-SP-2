import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  appType: 'mpa',
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        login: resolve(__dirname, './pages/auth/login/index.html'),
        auth: resolve(__dirname, './pages/auth/index.html'),
        register: resolve(__dirname, './pages/auth/register/index.html'),
        profile: resolve(__dirname, './pages/profile/index.html'),
        listing: resolve(__dirname, './pages/listing/index.html'),
        createListing: resolve(__dirname, './pages/listing/create/index.html'),
      },
    },
  },
});
