import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'dist',
};

module.exports = nextConfig;
