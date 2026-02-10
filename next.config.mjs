/** @type {import('next').NextConfig} */
// Triggering deployment fix
const nextConfig = {
    output: 'export',
    basePath: '/Portifolio-Takunda',
    assetPrefix: '/Portifolio-Takunda',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
