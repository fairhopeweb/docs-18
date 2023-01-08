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

  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,

    // SEGMENT_TAG_WRITE_KEY: process.env.SEGMENT_TAG_WRITE_KEY,
    // GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID,
    // MIXPANEL_TAG_ID: process.env.MIXPANEL_TAG_ID,
  },
  output: 'standalone',
});
