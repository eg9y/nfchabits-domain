/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/apple-app-site-association",
        destination: "/api/apple-app-site-association",
      },
    ];
  },
};

module.exports = nextConfig;
