import type { PageLoad } from './$types';
import { parseMarkdownFile } from '$lib/parseMarkdown';

export const load: PageLoad = async () => {
  const postFiles = import.meta.glob('/static/posts/**/index.md', { as: 'raw', eager: true });

  const posts = Object.entries(postFiles).map(([path, raw]) => {
    const slug = path.split('/').slice(-2)[0]; // Gets the folder name as slug
    return parseMarkdownFile(slug, raw as string);
  });

  // Optional: sort by date descending
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { posts };
};