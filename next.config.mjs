/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable Next.js Image Optimization
    // To configure specific domains, add them to the `remotePatterns` array.
    // For example:
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'example.com',
    //     port: '',
    //     pathname: '/my-images/**',
    //   },
    // ],
  },
}

export default nextConfig
