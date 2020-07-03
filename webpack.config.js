const webpack = require('webpack');
const path = require('path');

module.exports = (env, args) => {
  const debug = args.mode !== 'production';
  return {
    context: __dirname,
    devtool: debug
      ? 'inline-sourcemap'
      : false,
    entry: './app.jsx',
    output: {
      path: __dirname + '/bin',
      filename: 'app.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          // exclude: /node_modules/,
          exclude: path.resolve(__dirname, "node_modules"),
          loader: 'babel-loader'
        }
      ]
    }
  };
};
