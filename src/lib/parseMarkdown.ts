import { marked } from 'marked';

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  description: string;
  author?: string;
  featuredImage?: string;
  content: string;
  keywords?: string[];
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: string;
}

export function parseMarkdownFile(slug: string, raw: string): PostMetadata {
  const lines = raw.split('\n');
  const metadata: Record<string, string> = {};
  const contentLines: string[] = [];

  let inFrontMatter = false;
  let frontMatterComplete = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === '---') {
      inFrontMatter = !inFrontMatter;
      if (!inFrontMatter) frontMatterComplete = true;
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
          value = value.slice(1, -1);
        }
        metadata[key.trim()] = value;
      }
    } else if (frontMatterComplete) {
      contentLines.push(line);
    }
  }

  return {
    slug,
    title: metadata.title ?? '',
    date: metadata.date ?? '',
    description: metadata.description ?? '',
    author: metadata.author ?? 'The Long Report',
    featuredImage: metadata.featuredImage ? `/posts/${slug}/${metadata.featuredImage}` : undefined,
    content: marked.parse(contentLines.join('\n')),
    keywords: metadata.keywords?.split(',').map((k) => k.trim()) ?? [],
    ogImage: metadata.ogImage ? `/posts/${slug}/${metadata.ogImage}` : undefined,
    ogTitle: metadata.ogTitle ?? metadata.title,
    ogDescription: metadata.ogDescription ?? metadata.description,
    twitterCard: metadata.twitterCard ?? 'summary_large_image'
  };
}