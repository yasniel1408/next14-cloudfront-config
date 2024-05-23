/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // output: "export",
  assetPrefix: isProd ? "https://d1o63jc988sfg7.cloudfront.net" : undefined,
  // domains for images
  images: {
    domains: ["d1o63jc988sfg7.cloudfront.net"],
  },
  swcMinify: true,
  reactStrictMode: true,
};

export default nextConfig;
