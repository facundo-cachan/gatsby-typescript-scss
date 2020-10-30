module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-env'],
  plugins: [
    ['react-native-web', { commonjs: true }],
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-proposal-class-properties',
    'react-native-classname-to-style',
    [
      'react-native-platform-specific-extensions',
      {
        extensions: ['scss', 'sass'],
      },
    ],
  ],
};
