import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: false
});

export function parseMarkdown(markdown: string): string {
  const frontmatter = /^---\n([\s\S]*?)\n---/;
  return marked.parse(markdown.replace(frontmatter, '').trim());
}