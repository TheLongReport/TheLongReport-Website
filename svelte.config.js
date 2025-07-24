import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // SPA fallback for Azure
		}),
		prerender: {
			crawl: true,                     // Auto-follow links and prerender those pages
			entries: ['*'],                  // Include all static routes
			handleHttpError: 'warn',        // Prevent build from crashing on 404s
		}
	}
};

export default config;
