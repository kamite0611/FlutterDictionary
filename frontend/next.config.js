/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',

    domains: [
      {
        domain: 'flutter-gallery.com',
        defaultLocale: 'en',
      },
      {
        domain: 'ja.flutter-gallery.com',
        defaultLocale: 'ja',
      },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
