import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return process.env.VERCEL_ENV === 'preview'
    ? { rules: { userAgent: '*', disallow: '/' } }
    : { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://modfly.design/sitemap.xml' };
}
