import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const slug = params.slug;
  const postPath = path.resolve(`static/posts/${slug}.md`);

  if (!fs.existsSync(postPath)) throw error(404, 'Post not found');

  const fileContent = fs.readFileSync(postPath, 'utf-8');
  const { data, content } = matter(fileContent);
  const html = marked(content);

  return {
    title: data.title,
    date: data.date,
    author: data.author || 'Unknown',
    content: html
  };
}
