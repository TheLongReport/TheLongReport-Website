import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function load() {
  const postsDir = path.resolve('static/posts');
  const files = fs.readdirSync(postsDir);

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const fileContent = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description
    };
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { posts };
}
