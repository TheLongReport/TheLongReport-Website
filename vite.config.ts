import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		minify: false,
		cssCodeSplit: true
	},
	plugins: [tailwindcss(), sveltekit()]
});
