// src/routes/blog/[slug]/+page.ts
const postFiles = import.meta.glob('/src/posts/*.md');

export async function load({ params }) {
	const slug = params.slug;
	const filePath = `/src/posts/${slug}.md`;

	const importPost = postFiles[filePath];

	if (!importPost) {
		console.error(`❌ No blog post found for slug: ${slug}`);
		throw new Error('Post not found');
	}

	const post = await importPost();

	if (!post.metadata || !post.default) {
		console.error(`❌ Post metadata or content missing for: ${slug}`, post);
		throw new Error('Post data malformed');
	}

	return {
		title: post.metadata.title ?? 'Untitled',
		date: post.metadata.date ?? '',
		description: post.metadata.description ?? '',
		author: post.metadata.author ?? 'Unknown Author',
		content: post.default
	};
}