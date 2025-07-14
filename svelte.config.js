import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

adapter: adapter({
  fallback: '200.html'
})

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter({
			fallback: 'index.html', // 🔥 Enables client-side routing fallback for dynamic routes
			strict: false            // Optional: disables error on dynamic routes
		}),
		prerender: {
			entries: ['*'] // 🔄 Prerender all static routes
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;