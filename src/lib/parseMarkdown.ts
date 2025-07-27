import { marked } from 'marked';

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  description: string;
  featuredImage?: string;
  content: string;
}

export function parseMarkdownFile(slug: string, raw: string): PostMetadata {
  const lines = raw.split('\n');
  let metadata: Record<string, string> = {};
  let contentLines: string[] = [];
  let inFrontMatter = false;
  let frontMatterComplete = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === '---') {
      inFrontMatter = !inFrontMatter;
      if (!inFrontMatter) {
        frontMatterComplete = true;
      }
      continue;
    }

    if (inFrontMatter) {
      const [key, ...rest] = trimmed.split(':');
      if (key && rest.length > 0) {
        let value = rest.join(':').trim();
        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1); // remove surrounding quotes
        }
        metadata[key.trim()] = value;
      }
    } else if (frontMatterComplete) {
      contentLines.push(line);
    }
  }

  return {
    slug,
    title: metadata.title || slug,
    date: metadata.date || '',
    description: metadata.description || '',
    featuredImage: metadata.featuredImage ? `/posts/${slug}/${metadata.featuredImage}` : '',
    content: marked.parse(contentLines.join('\n'))
  };
}