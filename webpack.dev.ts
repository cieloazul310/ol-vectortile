/* eslint @typescript-eslint/no-var-requires: off */
import WebpackMerge from 'webpack-merge';
import common from './webpack.common';
const ESlintPlugin = require('eslint-webpack-plugin');

const config = WebpackMerge(common, {
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
