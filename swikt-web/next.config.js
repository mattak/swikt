/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: false,
  webpack: (config, options) => {
    config.optimization.minimize = false;
    return config;
  }
}

// export default nextConfig
module.exports = nextConfig
