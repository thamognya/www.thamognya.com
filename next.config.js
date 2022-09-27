/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        runtime: 'experimental-edge'
    },
    images: {
        domains: ['cdn.jsdelivr.net']
    }
}

module.exports = nextConfig
