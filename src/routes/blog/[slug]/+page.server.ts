import { error } from '@sveltejs/kit';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function load({ params }) {
  const modules = import.meta.glob('/src/lib/posts/*.md', {
    query: '?raw',
    import: 'default'
  });

  const slug = params.slug;
  const match = Object.keys(modules).find((p) => p.endsWith(`${slug}.md`));
  if (!match) throw error(404, 'Post not found');

  const raw = await modules[match]();
  const { data, content } = matter(raw);
  const html = marked(content);

  return {
    title: data.title,
    date: data.date,
    author: data.author || 'Unknown',
    content: html
  };
}
