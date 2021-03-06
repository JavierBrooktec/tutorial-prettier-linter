const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  extends: ['airbnb', 'react-app', 'prettier'],
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'prettier/prettier': ['error', prettierOptions],
    '@typescript-eslint/class-methods-use-this': 0,
    '@typescript-eslint/import/imports-first': 0,
    '@typescript-eslint/import/newline-after-import': 0,
    '@typescript-eslint/import/no-dynamic-require': 0,
    '@typescript-eslint/import/no-extraneous-dependencies': 0,
    '@typescript-eslint/import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    '@typescript-eslint/import/no-webpack-loader-syntax': 0,
    '@typescript-eslint/import/prefer-default-export': 0,
    'jsx-a11y/aria-props': 2,
    '@typescript-eslint/jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input'],
      },
    ],
    '@typescript-eslint/jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    '@typescript-eslint/max-len': 0,
    '@typescript-eslint/newline-per-chained-call': 0,
    '@typescript-eslint/no-confusing-arrow': 0,
    'no-console': ['error', { allow: ['error'] }],
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-use-before-define': 0,
    'prefer-template': 2,
    '@typescript-eslint/react/destructuring-assignment': 0,
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/react/jsx-closing-tag-location': 0,
    '@typescript-eslint/react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    '@typescript-eslint/react/jsx-no-target-blank': 0,
    'react/jsx-uses-vars': 2,
    '@typescript-eslint/react/require-default-props': 0,
    '@typescript-eslint/react/require-extension': 0,
    '@typescript-eslint/react/self-closing-comp': 0,
    '@typescript-eslint/react/sort-comp': 0,
    '@typescript-eslint/require-yield': 0,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'prettier/prettier': ['warn', prettierOptions],
      },
    },
  ],
};
