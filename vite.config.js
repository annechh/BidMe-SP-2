import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
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
        editListing: resolve(__dirname, './pages/listing/edit/index.html'),
        createListing: resolve(__dirname, './pages/listing/create/index.html'),
        searchListing: resolve(__dirname, './pages/listing/search/index.html'),
      },
    },
  },
});
