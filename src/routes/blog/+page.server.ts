import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function load() {
  const dir = path.resolve('src/posts');
  const files = fs.readdirSync(dir);

  const posts = files.map((filename) => {
    const file = fs.readFileSync(path.join(dir, filename), 'utf-8');
    const { data } = matter(file);
    return {
      title: data.title,
      slug: data.slug,
      date: data.date
    };
  });

  return {
    posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  };
}
