/* eslint-disable unicorn/prefer-module, @typescript-eslint/no-var-requires */

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  poweredByHeader: false,
  reactStrictMode: true,

  experimental: {},

  assetPrefix: process.env.ASSET_CDN || undefined,
  output: 'standalone',
});
