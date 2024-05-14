const path = require("path");

const nextConfig = {
  swcMinify: true,
  webpack: (config, options) => {
    config.resolve.alias["src"] = path.join(__dirname, "src");
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
