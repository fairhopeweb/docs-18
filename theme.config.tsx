import React from 'react';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
import { BrandLogo } from '@neuledge/brand';
import { Analytics } from './components/analytics';

const Head: React.FC = () => {
  const { asPath } = useRouter();
  const { frontMatter } = useConfig();

  return (
    <>
      <meta property="og:url" content={`https://neuledge.com${asPath}`} />
      <meta property="og:title" content={frontMatter.title || 'Neuledge'} />
      <meta
        property="og:description"
        content={frontMatter.description || 'Neuledge Engine Documentation'}
      />

      <Analytics />
    </>
  );
};

const config = {
  nextThemes: {
    defaultTheme: 'dark',
  },
  logo: <BrandLogo style={{ height: '2.2rem' }} />,
  logoLink: '/',
  primaryHue: { light: 281, dark: 278 },
  project: {
    link: 'https://github.com/neuledge/engine-js',
  },
  docsRepositoryBase: 'https://github.com/neuledge/docs/blob/main',

  useNextSeoProps: () => ({
    titleTemplate: '%s – Neuledge',
  }),

  head: Head,

  footer: {
    text: <span>&copy; Copyright {new Date().getFullYear()} Neuledge.</span>,
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
