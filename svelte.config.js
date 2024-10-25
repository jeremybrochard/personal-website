import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    csp: {
      directives: {
        'default-src': ['none'],
        'object-src': ['none'],
        'script-src': ['self', 'https://*.googletagmanager.com'],
        'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com'],
        'font-src': ['self', 'https://fonts.googleapis.com', 'https://fonts.gstatic.com '],
        'img-src': ['self', 'data:'],
        'connect-src': ['https://*.google-analytics.com']
      },
    }
  }
};

export default config;
