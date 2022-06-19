/** @type {import('next').NextConfig} */

const basePath = process.env.APP_ENV === 'gh-pages' ? '/swikt' : undefined;
const assetPrefix = process.env.APP_ENV === 'gh-pages' ? '/swikt/' : undefined;

const nextConfig = {
  basePath,
  assetPrefix,
  reactStrictMode: true,
  compress: false,
  webpack: (config, options) => {
    config.optimization.minimize = false;
    return config;
  }
}

// export default nextConfig
module.exports = nextConfig
