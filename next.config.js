/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

const withNextIntl = require("next-intl/plugin")("./src/i18n/request.ts");

module.exports = withNextIntl(nextConfig);
