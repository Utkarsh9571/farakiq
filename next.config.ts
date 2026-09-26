import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "farakiq.com",
          },
        ],
        destination: "https://www.farakiq.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
