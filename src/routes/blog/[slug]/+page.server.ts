import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

/** Enable static prerendering */
export const prerender = true;

/** Tell SvelteKit all valid slugs to prerender */
export function entries() {
  const postsDir = path.resolve('src/posts');
  const files = fs.readdirSync(postsDir);

  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      return { slug };
    });
}

/** Load the content for the given slug */
export async function load({ params }) {
  const slug = params.slug;
  const filePath = path.resolve(`src/posts/${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    title: data.title,
    date: data.date,
    author: data.author || 'Unknown Author',
    content: marked(content)
  };
}