import { parseMarkdown } from '$lib/utils/posts';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const modules = import.meta.glob('/src/posts/*.md', { query: '?raw', import: 'default' });

	const slug = params.slug;
	const match = Object.keys(modules).find((path) => path.endsWith(`${slug}.md`));

	if (!match) throw error(404, 'Post not found');

	const raw = await modules[match]();
	const post = parseMarkdown(raw);

	return post;
}