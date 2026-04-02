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

// BASE_PATH env var is set in CI (GitHub Actions) to match the repo name
// For GoDaddy manual deploy, build without BASE_PATH (defaults to /illustration)
const base = isDev ? '/' : (process.env.BASE_PATH ?? '/illustration');

// https://astro.build/config
export default defineConfig({
  base,
  integrations: devIntegrations,
  vite: {
    plugins: [tailwindcss()]
  }
});