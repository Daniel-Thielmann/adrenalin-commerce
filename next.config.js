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
            },
            {
                protocol: 'https',
                hostname: 'hondacavalcantiprimo.com.br'
            },
            {
                protocol: 'https',
                hostname: 'phoenix-fly.com'
            }
        ]
    }
}

module.exports = nextConfig;
