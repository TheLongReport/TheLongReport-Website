export function parseMarkdown(raw: string) {
	const frontMatterRegex = /^---\n([\s\S]*?)\n---/;
	const match = raw.match(frontMatterRegex);

	let metadata = {
		title: 'Untitled',
		date: '',
		description: '',
		author: 'Unknown Author'
	};

	let content = raw;

	if (match) {
		const rawFrontMatter = match[1];
		content = raw.replace(frontMatterRegex, '').trim();

		rawFrontMatter.split('\n').forEach(line => {
			const [key, ...rest] = line.split(':');
			if (key && rest.length > 0) {
				metadata[key.trim()] = rest.join(':').trim();
			}
		});
	}

	return { metadata, content };
}