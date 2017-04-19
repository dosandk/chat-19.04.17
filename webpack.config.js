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
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: 'style-loader' // creates style nodes from JS strings
              },
              {
                loader: 'css-loader', // translates CSS into CommonJS
                query: {
                  modules: true,
                  camelCase: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                }
              },
              {
                loader: 'sass-loader', // compiles Sass to CSS
              }
            ]
          },
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
