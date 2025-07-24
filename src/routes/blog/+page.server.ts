import matter from 'gray-matter';

export async function load() {
  const modules = import.meta.glob('/src/posts/*.md', { as: 'raw' });

  const posts = [];

  for (const path in modules) {
    const slug = path.split('/').pop().replace('.md', '');
    const raw = await modules[path]();
    const { data } = matter(raw);

    posts.push({
      slug,
      title: data.title,
      date: data.date,
      description: data.description
    });
  }

  // sort newest first
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { posts };
}
