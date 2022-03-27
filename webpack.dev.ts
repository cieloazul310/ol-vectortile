/* eslint @typescript-eslint/no-var-requires: off */
import { merge } from 'webpack-merge';
import { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import common from './webpack.common';
const ESlintPlugin = require('eslint-webpack-plugin');

const config = merge<Configuration & DevServerConfiguration>(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist/',
  },
  plugins: [
    new ESlintPlugin({
      extensions: ['js', 'ts'],
    }),
  ],
});

export default config;
