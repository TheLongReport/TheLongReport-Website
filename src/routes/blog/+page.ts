import { parseMarkdown } from '$lib/parseMarkdown';

export async function load() {
  const postFiles = import.meta.glob('../../posts/*.md', { as: 'raw' });
  const posts = [];

  for (const [path, resolver] of Object.entries(postFiles)) {
    const slug = path.split('/').pop().replace('.md', '');
    const raw = await resolver();

    const match = raw.match(/^---\n([\s\S]*?)\n---/);
    let metadata = { title: 'Untitled', date: '', author: 'Unknown', description: '' };

    if (match) {
      const lines = match[1].split('\n');
      for (const line of lines) {
        const [key, ...rest] = line.split(':');
        const value = rest.join(':').trim();
        if (key && value) metadata[key.trim()] = value;
      }
    }

    posts.push({ ...metadata, slug });
  }

  // Sort by date (optional)
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return { posts };
}