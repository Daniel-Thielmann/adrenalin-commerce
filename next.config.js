/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com'
            },
            {
                protocol: 'https',
                hostname: 'assets.specialized.com'
            },
            {
                protocol: 'https',
                hostname: 'e7.pngegg.com'
            }
        ]
    }
}

module.exports = nextConfig;
