// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Allow fast refresh from localhost + your local network IP
  experimental: {
    allowedDevOrigins: ["http://192.168.137.1"],
    serverActions: {
    bodySizeLimit: '10mb', // ✅ increase to 10 MB // add your LAN IP here
  },
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
