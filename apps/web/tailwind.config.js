const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    primary: colors.yellow,
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1440px',
      },
    },

    extend: {
      colors: {
        primary: colors.yellow,
      },
      boxShadow: {
        sm: '0px 1px 4px 2px rgba(57,76,122,0.02)',
      },
    },
  },
  plugins: [],
};
