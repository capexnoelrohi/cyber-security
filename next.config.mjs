import "./src/env.mjs";

/** @type {import('next').NextConfig} */
const config = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default config;
