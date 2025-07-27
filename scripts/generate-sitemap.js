import fs from 'fs';
import path from 'path';

const postsDir = './static/posts'; // Where your Markdown folders live
const baseUrl = 'https://thelongreport.net';

// Get all post folders
const postSlugs = fs.readdirSync(postsDir)
  .filter((f) => fs.statSync(path.join(postsDir, f)).isDirectory());

// Static site routes to include
const staticRoutes = [
  { loc: `${baseUrl}/`, changefreq: 'daily', priority: 1.0 },
  { loc: `${baseUrl}/blog`, changefreq: 'daily', priority: 0.9 },
  { loc: `${baseUrl}/podcast`, changefreq: 'weekly', priority: 0.6 },
  { loc: `${baseUrl}/contact`, changefreq: 'monthly', priority: 0.4 },
];

// Build all URLs
const urls = [
  ...staticRoutes,
  ...postSlugs.map(slug => ({
    loc: `${baseUrl}/blog/${slug}`,
    changefreq: 'monthly',
    priority: 0.8
  }))
];

// Build XML
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${
  urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')
}\n</urlset>`;

// Write to sitemap.xml
fs.writeFileSync('./static/sitemap.xml', sitemapXml.trim());
console.log('✅ Sitemap generated');