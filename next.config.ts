import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/projekt/website/view": ["./private/website/**/*"],
    "/projekt/website/file/[...path]": ["./private/website/**/*"],
  },
  async headers() {
    return [
      {
        source: "/projekt/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
          },
          {
            key: "Cache-Control",
            value: "private, no-store, max-age=0",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
