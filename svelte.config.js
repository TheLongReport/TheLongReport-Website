import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';
import fs from 'fs';

// Dynamically collect all /blog/[slug] entries from static/posts folder
const blogSlugs = fs
  .readdirSync('./static/posts', { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => `/blog/${dirent.name}`);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // SPA fallback for Azure Static Web Apps
		}),
		prerender: {
			crawl: true,
			handleHttpError: 'warn',
			entries: ['*', ...blogSlugs] // Include all static routes + dynamic blog slugs
		}
	}
};

export default config;