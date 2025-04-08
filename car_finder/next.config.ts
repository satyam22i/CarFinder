/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.autodataapi.com',
      'digitalassets.tesla.com',
      'www.hondacarindia.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.autodataapi.com',
        pathname: '/car-images/**',
      },
      {
        protocol: 'https',
        hostname: 'www.hondacarindia.com',
        pathname: '/**', // Match all image paths from this domain
      },
    ],
  },
};

module.exports = nextConfig;
