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
                hostname: 'banner2.cleanpng.com'
            }
        ]
    }
}

module.exports = nextConfig;
