module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react-native/no-inline-styles': 0,
    'react/no-unstable-nested-components': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': false,
      },
    ],
  },
};
