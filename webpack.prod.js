<<<<<<< HEAD
import path from 'path';
import { fileURLToPath } from 'url';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';
import ImageminWebpackPlugin from 'imagemin-webpack-plugin';
import ImageminMozjpeg from 'imagemin-mozjpeg';
import ImageminPngquant from 'imagemin-pngquant';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default merge(common, {
=======
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = merge(common, {
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
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
<<<<<<< HEAD
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: ({ url }) =>
            url.href.startsWith('https://restaurant-api.dicoding.dev/list'),
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
    new ImageminWebpackPlugin.default({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
        ImageminPngquant({
          quality: [0.3, 0.5],
        }),
      ],
      test: /\.(jpe?g|png)$/i,
=======
  plugins: [
    new InjectManifest({
      swSrc: './src/scripts/sw.js',
      swDest: 'sw.js',
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
    }),
  ],
});
