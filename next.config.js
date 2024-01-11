/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "masterdba.ir",
      },
    ],
  },
};

module.exports = nextConfig;
