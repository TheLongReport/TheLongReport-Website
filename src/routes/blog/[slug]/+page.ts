import { parseMarkdown } from '$lib/utils/parseMarkdown';
import { error } from '@sveltejs/kit';

const allPosts = import.meta.glob('/src/posts/*.md', { as: 'raw' });

export async function load({ params }) {
	const slug = params.slug;
	const match = Object.entries(allPosts).find(([path]) =>
		path.endsWith(`/${slug}.md`)
	);

	if (!match) throw error(404, 'Post not found');

	const raw = await match[1]();
	const { title, date, author, content } = parseMarkdown(raw);

	return {
		title,
		date,
		author,
		content
	};
}