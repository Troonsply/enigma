import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/enigma',
    trailingSlash: true,
    assetPrefix: "/enigma/_next/",
};

module.exports = nextConfig;
