import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/enigma",
    trailingSlash: true,
};

module.exports = nextConfig;
