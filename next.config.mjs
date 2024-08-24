/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["utfs.io", "localhost", "secure.gravatar.com"],
  },
};

export default nextConfig;
