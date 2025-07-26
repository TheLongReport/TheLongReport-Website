import { parseMarkdown } from '$lib/utils/parseMarkdown';

const allPostFiles = import.meta.glob('/src/posts/*.md', { as: 'raw' });

export async function load({ params }) {
	const slug = params.slug;
	const matchPath = Object.keys(allPostFiles).find(path =>
		path.includes(`${slug}.md`)
	);

	if (!matchPath) {
		console.error(`❌ No matching post for slug: ${slug}`);
		return { content: '', title: 'Not Found', date: '', author: '', description: '' };
	}

	const raw = await allPostFiles[matchPath]();
	const { metadata, content } = parseMarkdown(raw);

	return {
		title: metadata.title,
		date: metadata.date,
		author: metadata.author,
		description: metadata.description,
		content
	};
}