import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.modfly.design' }],
        destination: 'https://modfly.design/:path*',
        permanent: true,
      },
      { source: '/', destination: '/pt', permanent: true },
      { source: '/docs', destination: '/pt/docs/getting-started/introduction', permanent: true },
      { source: '/docs/:path*', destination: '/pt/docs/:path*', permanent: true },
      {
        source: '/:lang(pt|en)/docs',
        destination: '/:lang/docs/getting-started/introduction',
        permanent: true,
      },
    ];
  },
  async headers() {
    return process.env.VERCEL_ENV === 'preview'
      ? [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }]
      : [];
  },
};
export default nextConfig;
