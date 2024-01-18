const { withContentlayer } = require('next-contentlayer')



/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

}

module.exports = withContentlayer(nextConfig)
