/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v1.masterdba.ir",
      },
    ],
  },
};

module.exports = nextConfig;
