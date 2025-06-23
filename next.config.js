/** @type {import('next').NextConfig} */
const nextConfig = {
experimental: {
  serverActions: {},
}
  // Optional: If you want to use Webpack and disable Turbopack
  // This only works with NEXT_DISABLE_TURBOPACK env
};

module.exports = nextConfig;
