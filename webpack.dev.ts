import * as merge from 'webpack-merge';
import common from './webpack.common';

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist/'
  }
});

export default config;
