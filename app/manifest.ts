import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Odock.ai',
    short_name: 'Odock.ai',
    description:
      'AI governance platform for AI, MCP, and AI agent traffic.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0e14',
    theme_color: '#0a0e14',
    icons: [
      {
        src: '/icon-dark-32x32.svg',
        sizes: '32x32',
        type: 'image/svg+xml',
      },
      {
        src: '/icon-light-32x32.svg',
        sizes: '32x32',
        type: 'image/svg+xml',
      },
    ],
  };
}
