import WebpackMerge from 'webpack-merge';
import common from './webpack.common';

import ESlintWebpackPlugin = require('eslint-webpack-plugin');
const ESlintPlugin = ESlintWebpackPlugin.default;

const config = WebpackMerge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist/',
  },
  plugins: [
    new ESlintPlugin({
      extensions: ['js', 'ts'],
    }),
  ],
});

export default config;
