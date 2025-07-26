import { parseMarkdown } from '$lib/utils/parseMarkdown';

const allPostFiles = import.meta.glob('/src/posts/*.md', { as: 'raw' });

export async function load() {
	console.log('📝 Loading all blog post files...');
	const postPromises = Object.entries(allPostFiles).map(async ([path, resolver]) => {
		const raw = await resolver();
		const slug = path.split('/').pop()?.replace('.md', '') ?? 'unknown';

		const { metadata } = parseMarkdown(raw);

		console.log(`✅ Found post: ${slug}`, metadata);

		return {
			slug,
			title: metadata.title,
			date: metadata.date,
			description: metadata.description,
			author: metadata.author
		};
	});

	const posts = await Promise.all(postPromises);
	console.log('✅ Final posts:', posts);
	return { posts };
}