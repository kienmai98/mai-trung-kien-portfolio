module.exports = {
  extends: [
    'plugin:@nx/react-typescript',
    'next',
    'next/core-web-vitals',
    '../../.eslintrc.json',
  ],
  ignorePatterns: ['!**/*', '.next/**/*', 'tailwind.config.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@next/next/no-html-link-for-pages': ['error', 'apps/web/pages'],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {},
    },
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
  env: {
    jest: true,
  },
  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: 'apps/web/tsconfig.json',
      },
    },
  },
};
