import { getPost } from '$lib/content/posts';

export function load({ params }) {
	const post = getPost(params.slug);
	return { post };
}