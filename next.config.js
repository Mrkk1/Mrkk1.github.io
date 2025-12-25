/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
}

const createNextIntlPlugin = require("next-intl/plugin")
const withNextIntl = createNextIntlPlugin("./i18n.ts")

// module.exports = withNextIntl(nextConfig)
module.exports = nextConfig
