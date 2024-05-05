/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        // port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        // port: '',
        pathname: '**',
      },
    ]
    // domains: ["images.unsplash.com", "cdn.pixabay.com", "images.pexel.com"],
  },
};

export default nextConfig;
