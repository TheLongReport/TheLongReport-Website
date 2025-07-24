import { error } from '@sveltejs/kit';
import { dev } from '$app/environment';

export async function load() {
  const modules = import.meta.glob('/src/lib/posts/*.md', {
    query: '?raw',
    import: 'default'
  });

  const posts = [];

  for (const [path, resolver] of Object.entries(modules)) {
    const raw = await resolver();
    const slug = path
      .split('/')
      .pop()
      ?.replace('.md', '') ?? 'unknown';

    const { default: matter } = await import('gray-matter');
    const { marked } = await import('marked');

    const { data, content } = matter(raw);

    posts.push({
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      content: dev ? marked(content) : undefined // only load full content in dev
    });
  }

  // newest first
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { posts };
}
