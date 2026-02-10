/** @type {import('next').NextConfig} */
// Triggering deployment fix
const nextConfig = {
    output: 'export',
    basePath: '/Portifolio-Takunda',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
