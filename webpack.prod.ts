import WebpackMerge from 'webpack-merge';
import common from './webpack.common';

const config = WebpackMerge(common, {
  mode: 'production',
  devtool: 'source-map',
});

export default config;
