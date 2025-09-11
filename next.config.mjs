// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Allow fast refresh from localhost + your local network IP
  experimental: {
    allowedDevOrigins: ["http://localhost:3000", "http://192.168.137.1:3000"],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
