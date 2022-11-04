/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const prod = process.env.NODE_ENV === 'production'

const moduleExports = withPWA({
  // Your existing module.exports
  reactStrictMode: true,

  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    // disable: process.env.NODE_ENV === 'development',
    disable: !prod,
    buildExcludes: [/middleware-manifest.json$/],
    maximumFileSizeToCacheInBytes: 3000000,
  },
  images: {
    domains: [
      'via.placeholder.com',
      'res.cloudinary.com',
      'wp-tid.zillowstatic.com',
    ],
  },
})
