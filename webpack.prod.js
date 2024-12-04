const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new InjectManifest({
      swSrc: './src/scripts/sw.js',
      swDest: 'sw.js',
    }),
  ],
});
