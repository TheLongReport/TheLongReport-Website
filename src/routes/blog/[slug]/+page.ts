import type { PageLoad } from './$types';
import { parseMarkdownFile } from '$lib/parseMarkdown';

export const prerender = true;


export const load: PageLoad = async ({ params }) => {
  const slug = params.slug;

  const files = import.meta.glob('/static/posts/**/index.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const allPosts = Object.entries(files)
    .map(([path, raw]) => {
      const slugMatch = path.match(/\/static\/posts\/(.*?)\/index\.md$/);
      if (!slugMatch) return null;

      const postSlug = slugMatch[1];
      const parsed = parseMarkdownFile(postSlug, raw as string);
      return { ...parsed, slug: postSlug };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  const current = allPosts[currentIndex];
  const next = allPosts[currentIndex - 1] ?? null;
  const previous = allPosts[currentIndex + 1] ?? null;

  return {
    slug,
    title: current.title,
    date: current.date,
    description: current.description,
    content: current.content,
    author: current.author,
    featuredImage: current.featuredImage,
    keywords: current.keywords,
    ogImage: current.ogImage,
    ogTitle: current.ogTitle,
    ogDescription: current.ogDescription,
    twitterCard: current.twitterCard,
    next: next ? { slug: next.slug, title: next.title } : null,
    previous: previous ? { slug: previous.slug, title: previous.title } : null
  };
};