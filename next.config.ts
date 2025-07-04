import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://images.chesscomfiles.com/**'),
      new URL('https://flagcdn.com/**'),
    ],
  },
};

export default nextConfig;
