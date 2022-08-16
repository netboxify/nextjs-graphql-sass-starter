const { patchWebpackConfig } = require("next-global-css");

module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  compiler: {
    removeConsole: true,
  },
  webpack(config, options) {
    patchWebpackConfig(config, options);

    return config;
  },
};
