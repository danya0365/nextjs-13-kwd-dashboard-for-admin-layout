/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ["localhost", "picsum.photos", "ui-avatars.com"],
  },
};

module.exports = nextConfig;
