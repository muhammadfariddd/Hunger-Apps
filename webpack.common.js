const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
        {
          from: path.resolve(__dirname, 'src/public/images/'),
          to: path.resolve(__dirname, 'dist/images/'),
        },
        {
          from: path.resolve(__dirname, 'src/public/fonts/fontawesome'),
          to: path.resolve(__dirname, 'dist/fonts/fontawesome'),
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: ({ url }) =>
            url.href.startsWith('https://restaurant-api.dicoding.dev/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'restaurant-api',
          },
        },
        {
          urlPattern: ({ url }) =>
            url.href.startsWith('https://restaurant-api.dicoding.dev/images/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'restaurant-image-api',
          },
        },
        {
          urlPattern: ({ url }) =>
            url.href.startsWith('https://restaurant-api.dicoding.dev/detail/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'restaurant-detail',
          },
        },
      ],
    }),
  ],
};
