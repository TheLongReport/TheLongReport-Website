import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const postsDir = path.resolve('posts');

export function getAllPosts() {
	const files = fs.readdirSync(postsDir);
	return files.map((file) => {
		const slug = file.replace('.md', '');
		return { slug };
	});
}

export function getPost(slug: string) {
	const filePath = path.join(postsDir, `${slug}.md`);
	const file = fs.readFileSync(filePath, 'utf-8');
	const html = marked(file);
	return {
		slug,
		html
	};
}