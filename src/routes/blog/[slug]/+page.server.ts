import fs from 'fs';
import path from 'path';
import { compile } from 'mdsvex';

export async function load({ params }) {
  const { slug } = params;
  const filepath = path.resolve('src/posts', `${slug}.md`);

  if (!fs.existsSync(filepath)) {
    return { status: 404 };
  }

  const raw = fs.readFileSync(filepath, 'utf-8');
  const { code } = await compile(raw, { filename: `${slug}.md` });

  return {
    content: code
  };
}
