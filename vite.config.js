import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        login: resolve(__dirname, './auth/login/index.html'),
        auth: resolve(__dirname, './auth/index.html'),
        register: resolve(__dirname, './auth/register/index.html'),
        profile: resolve(__dirname, './profile/index.html'),
        listing: resolve(__dirname, './listing/index.html'),
        editListing: resolve(__dirname, './listing/edit/index.html'),
        createListing: resolve(__dirname, './listing/create/index.html'),
        searchListing: resolve(__dirname, './listing/search/index.html'),
      },
    },
  },
});
