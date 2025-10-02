/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" }
    ],
  },
};

module.exports = nextConfig;
