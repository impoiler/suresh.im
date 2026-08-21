/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    turbopack: {},
    outputFileTracingRoot: __dirname,
    async headers() {
        const linkHeader = [
            '</llms.txt>; rel="describedby"; type="text/plain"',
            '</sitemap.xml>; rel="sitemap"; type="application/xml"',
        ].join(', ')

        return [
            {
                source: '/',
                headers: [
                    { key: 'Link', value: linkHeader },
                    { key: 'Vary', value: 'Accept, Accept-Encoding' },
                ],
            },
            {
                source: '/(about|projects|contact|privacy|blog/:path*)',
                headers: [{ key: 'Vary', value: 'Accept, Accept-Encoding' }],
            },
        ]
    },
    async redirects() {
        return [{
            source: '/:path*',
            has: [{ type: 'host', value: 'suresh.im' }],
            destination: 'https://sureshchaudhary.com/:path*',
            permanent: true,
        }, {
            source: '/:path*',
            has: [{ type: 'host', value: 'www.sureshchaudhary.com' }],
            destination: 'https://sureshchaudhary.com/:path*',
            permanent: true,
        }]
    },
}

module.exports = nextConfig
