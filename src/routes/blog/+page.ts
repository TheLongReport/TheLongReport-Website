import { parseMarkdown } from '$lib/utils/posts';
import { error } from '@sveltejs/kit';

export async function load() {
	const modules = import.meta.glob('/src/posts/*.md', { query: '?raw', import: 'default' });

	const posts = [];

	for (const path in modules) {
		const raw = await modules[path]();
		const slug = path.split('/').pop()?.replace('.md', '') ?? 'unknown';
		const post = parseMarkdown(raw);

		posts.push({
			slug,
			title: post.title,
			date: post.date,
			description: post.description
		});
	}

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
}