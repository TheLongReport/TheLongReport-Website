import type { PageLoad } from './$types';
import { parseMarkdownFile } from '$lib/parseMarkdown';

export const load: PageLoad = async ({ params }) => {
  const slug = params.slug;

  const files = import.meta.glob('/static/posts/**/index.md', { as: 'raw', eager: true });
  const matched = Object.entries(files).find(([path]) => path.includes(`/${slug}/index.md`));

  if (!matched) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  const [, raw] = matched;
  const post = parseMarkdownFile(slug, raw as string);

  // ✅ Destructure and return directly for your Svelte file
  return {
    title: post.title,
    date: post.date,
    description: post.description,
    content: post.content,
    author: post.author,
    featuredImage: post.featuredImage
  };
};