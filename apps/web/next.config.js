const { withNx } = require('@nrwl/next/plugins/with-nx');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  nx: {
    svgr: false,
  },
};

module.exports = withNx(nextConfig);
