import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gimmir',
    short_name: 'Gimmir',
    description: 'Engineering digital assets that pass due diligence.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020408',
    theme_color: '#020408',
    icons: [
      {
        src: '/favicon.png?v=2',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
