/** @type {import('next').NextConfig} */



const nextConfig = {
    webpack(config) {
        config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};



export default nextConfig;