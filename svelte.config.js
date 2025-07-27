import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';
import fs from 'fs';
import path from 'path';

// Get all slugs from /static/posts/*/index.md
const getBlogSlugs = () => {
  const baseDir = './static/posts';
  return fs
    .readdirSync(baseDir)
    .filter(name => fs.existsSync(path.join(baseDir, name, 'index.md')))
    .map(name => `/blog/${name}`);
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
    }),
    prerender: {
      crawl: true,
      entries: ['*', ...getBlogSlugs()],
      handleHttpError: 'warn',
    }
  }
};

export default config;