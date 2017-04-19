var path = require('path');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/(node_modules)/, /\.spec\.jsx$/],
        include: [
          path.resolve(__dirname, './js')
        ],
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    compress: true,
    port: 9000
  }
};
