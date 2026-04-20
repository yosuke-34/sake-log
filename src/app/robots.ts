import type { MetadataRoute } from 'next';

const BASE_URL = 'https://sake-log-two.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/add', '/edit/', '/api/'],
      },
      {
        // AdSenseクローラーには全コンテンツページを許可
        userAgent: 'Mediapartners-Google',
        allow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
