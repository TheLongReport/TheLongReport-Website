import matter from 'gray-matter';

export async function load() {
  const modules = import.meta.glob('/src/lib/posts/*.md', {
    query: '?raw',
    import: 'default'
  });

  const posts = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const raw = await resolver();
      const { data } = matter(raw);
      const slug = path.split('/').pop()?.replace('.md', '');

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description
      };
    })
  );

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { posts };
}
