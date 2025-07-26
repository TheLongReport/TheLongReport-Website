import matter from 'gray-matter';
import { marked } from 'marked';

export function parseMarkdown(raw: string) {
	const { data, content } = matter(raw);
	const html = marked(content);

	return {
		title: data.title,
		date: data.date,
		description: data.description,
		author: data.author ?? 'Unknown Author',
		content: html
	};
}