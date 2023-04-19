const { withNx } = require('@nrwl/next/plugins/with-nx');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  nx: {
    svgr: false,
  },
  output: 'export',
};

module.exports = withNx(nextConfig);
