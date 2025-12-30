/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  env: {
    SITE_URL: process.env.SITE_URL || 'https://Nikhil-ap.dev',
  },
}

module.exports = nextConfig