/** @type {import('next').NextConfig} */
const nextConfig = {
  // This line enables static exports for GitHub Pages.
  output: 'export',

  // The basePath and assetPrefix are NOT needed for a custom domain.
  // We can remove or comment them out.

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
