import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import string from 'vite-plugin-string';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		minify: false,
		cssCodeSplit: true
	},
	plugins: [
		tailwindcss(),
		sveltekit(),
		string({
			include: '**/*.md'
		})
	]
});