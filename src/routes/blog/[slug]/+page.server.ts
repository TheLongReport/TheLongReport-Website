import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function load({ params }) {
  const slug = params.slug;
  const filePath = path.resolve(`src/posts/${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    title: data.title,
    date: data.date,
    author: data.author || 'Unknown Author',
    content: marked(content)
  };
}