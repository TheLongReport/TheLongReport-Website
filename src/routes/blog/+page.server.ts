import { getAllPosts } from '$lib/content/posts';

export function load() {
	return {
		posts: getAllPosts()
	};
}