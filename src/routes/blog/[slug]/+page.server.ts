import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const slug = params.slug;

  const modules = import.meta.glob('/src/lib/posts/*.md', {
    query: '?raw',
    import: 'default',
  });

  const match = Object.keys(modules).find((path) =>
    path.endsWith(`${slug}.md`)
  );

  if (!match) throw error(404, 'Post not found');

  const raw = await modules[match]();
  const { default: matter } = await import('gray-matter');
  const { marked } = await import('marked');
  const { data, content } = matter(raw);

  return {
    title: data.title,
    date: data.date,
    author: data.author || 'Unknown Author',
    content: marked(content),
  };
}
