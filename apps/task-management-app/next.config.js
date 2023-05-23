const { withNx } = require('@nx/next/plugins/with-nx');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  output: 'export',
  nx: {
    svgr: false,
  },
};

module.exports = withNx(nextConfig);
