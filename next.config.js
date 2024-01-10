const withPWA = require("next-pwa")({
  dest: 'public',
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  // module.exports = {
  i18n: {
    locales: ["en", "my"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  // swcMinify: true,
  compiler: {
    removeConsole: true,
  },
  images: {
    domains: ["robohash.org", "res.cloudinary.com"],
  },
  // pwa: {
  //   dest: "public",
  //   skipWaiting: true,
  //   disable: process.env.NODE_ENV === "development",
  // },
  // };
});
