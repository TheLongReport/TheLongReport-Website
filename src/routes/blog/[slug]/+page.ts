import { parseMarkdown } from '$lib/parseMarkdown';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const post = await import(`../../../posts/${params.slug}.md?raw`);
    const content = parseMarkdown(post.default);

    // Extract metadata from frontmatter manually
    const match = post.default.match(/^---\n([\s\S]*?)\n---/);
    let metadata = { title: 'Untitled', date: '', author: 'Unknown Author' };

    if (match) {
      const lines = match[1].split('\n');
      for (const line of lines) {
        const [key, ...rest] = line.split(':');
        const value = rest.join(':').trim();
        if (key && value) metadata[key.trim()] = value;
      }
    }

    return {
      content,
      ...metadata
    };
  } catch (e) {
    throw error(404, 'Post not found');
  }
}