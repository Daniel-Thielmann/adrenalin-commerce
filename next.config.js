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
            },
            {
                protocol: 'https',
                hostname: 'cyclingmagazine.ca'
            },
            {
                protocol: 'https',
                hostname: 'dirtwheelsmag.com'
            },
            {
                protocol: 'https',
                hostname: 'theindianface.com'
            },
            {
                protocol: 'https',
                hostname: 'c4.wallpaperflare.com'
            },
            {
                protocol: 'https',
                hostname: 'e1.pxfuel.com'
            },
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com'
            },
            {
                protocol: 'https',
                hostname: 't4.ftcdn.net'
            },
            {
                protocol: 'https',
                hostname: 'w7.pngwing.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn.imgbin.com'
            },
        ]
    }
}

module.exports = nextConfig;
