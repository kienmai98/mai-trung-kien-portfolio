const { withNx } = require('@nx/next/plugins/with-nx');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  nx: {
    svgr: false,
  },
};

module.exports = withNx(nextConfig);
