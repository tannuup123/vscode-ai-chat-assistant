const path = require('path');

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/webview/index.tsx',
  output: {
    filename: 'webview.js',
    path: path.resolve(__dirname, 'media')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  devtool: 'source-map'
};
