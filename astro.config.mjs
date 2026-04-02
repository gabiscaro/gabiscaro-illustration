// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isDev = process.env.NODE_ENV !== 'production';

// Keystatic (CMS) is only loaded in development — production build is fully static
const devIntegrations = isDev
  ? await Promise.all([
      import('@astrojs/react').then(m => m.default()),
      import('@keystatic/astro').then(m => m.default()),
    ])
  : [];

// https://astro.build/config
export default defineConfig({
  base: isDev ? '/' : '/illustration',
  integrations: devIntegrations,
  vite: {
    plugins: [tailwindcss()]
  }
});