// src/routes/blog/+page.ts
const allPostFiles = import.meta.glob('/src/posts/*.md');

export async function load() {
	console.log("📝 Loading all blog post files...");

	const postPromises = Object.entries(allPostFiles).map(async ([path, resolver]) => {
		const post = await resolver();
		const slug = path.split('/').pop()?.replace('.md', '') ?? 'unknown';

		console.log(`✅ Found post: ${slug}`, post.metadata);

		return {
			slug,
			title: post.metadata?.title ?? 'Untitled',
			date: post.metadata?.date ?? '',
			description: post.metadata?.description ?? '',
			author: post.metadata?.author ?? 'Unknown Author'
		};
	});

	const posts = await Promise.all(postPromises);
	console.log("✅ Final posts:", posts);

	return { posts };
}