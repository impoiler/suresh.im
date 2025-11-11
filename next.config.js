/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    turbopack: {},
    outputFileTracingRoot: __dirname,
}

module.exports = nextConfig
