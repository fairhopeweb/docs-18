/* eslint-disable unicorn/prefer-module, @typescript-eslint/no-var-requires */

const { getHighlighter, BUNDLED_LANGUAGES } = require('shiki');
const grammar = require('vscode-neuledge-states/syntaxes/states.tmLanguage.json');

const rehypePrettyCodeOptions = {
  getHighlighter: (options) =>
    getHighlighter({
      ...options,
      langs: [
        ...BUNDLED_LANGUAGES,
        {
          id: 'neuledge',
          scopeName: 'source.states',
          grammar,
          aliases: ['states', 'neuledge'],
        },
      ],
    }),
};

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    rehypePrettyCodeOptions,
  },
});

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  poweredByHeader: false,
  reactStrictMode: true,

  experimental: {},

  assetPrefix: process.env.ASSET_CDN || undefined,
  output: 'standalone',

  redirects: () => [
    {
      source: '/',
      destination: '/docs',
      permanent: false,
    },
  ],
});
