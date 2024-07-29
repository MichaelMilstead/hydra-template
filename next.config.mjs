/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
      {
        protocol: "https",
        hostname: "media0.giphy.com",
      },
      {
        protocol: "https",
        hostname: "media3.giphy.com",
      },
    ],
  },
  redirects: async () => {
    return [];
  },
};

export default nextConfig;
