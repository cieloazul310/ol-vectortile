import * as merge from 'webpack-merge';
import common from './webpack.common';

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
});

export default config;
