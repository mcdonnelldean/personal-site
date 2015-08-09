'use strict'

module.exports = {
  entry: [
    './lib/app.js'
  ],
  output: {
    path: './dist/',
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'jsx-loader' ]
    }]
  }
}
