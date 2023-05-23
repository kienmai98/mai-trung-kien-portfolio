const { withNx } = require('@nx/next/plugins/with-nx');

const nextConfig = {
  output: 'export',
  nx: {
    svgr: false,
  },
};

module.exports = withNx(nextConfig);
