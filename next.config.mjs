/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['f-okna.kz', 'images.pexels.com'], // Добавили pexels.com для внешних изображений
    remotePatterns: [
      {
        protocol: 'https',
        ignoreDuringBuilds: true,
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;