import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/other-videos",
        destination: "/resources/videos/other-videos/",
        permanent: true,
      },
      {
        source: "/promo-videos",
        destination: "/resources/videos/promo-videos/",
        permanent: true,
      },
      {
        source: "/workshop-videos",
        destination: "/resources/videos/workshop-videos/",
        permanent: true,
      },
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/wp-sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "synergyspineandnerve.com",
      },
      {
        protocol: "https",
        hostname: "www.straightchiro.com",
      },
      {
        protocol: "https",
        hostname: "straightchiro.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  outputFileTracingExcludes: {
    "*": ["./public/images/**", "./public/**/*.mp4", "./public/**/*.webm"],
  },
};

export default nextConfig;
