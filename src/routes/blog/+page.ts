import { parseMarkdown } from '$lib/utils/parseMarkdown';

const allPostFiles = import.meta.glob('/src/posts/*.md', {
	query: '?raw',
	import: 'default'
});

export async function load() {
	const posts = await Promise.all(
		Object.entries(allPostFiles).map(async ([path, resolver]) => {
			try {
				const raw = await resolver();
				const { title, date, description } = parseMarkdown(raw);
				const slug = path.split('/').pop()?.replace('.md', '') ?? 'unknown';

				return { slug, title, date, description };
			} catch (err) {
				console.error(`Error loading post ${path}:`, err);
				return null;
			}
		})
	);

	return {
		posts: posts.filter(Boolean)
	};
}