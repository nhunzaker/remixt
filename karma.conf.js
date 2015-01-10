var webpack = require('webpack');
var webpack_config = require('./webpack.config')

module.exports = function(config) {
  config.set({

    browsers: [ 'Chrome' ],
    frameworks: [ 'mocha', 'sinon-chai' ],

    files: [
      { pattern: 'test/*.json', watched: false, included: false, served: true },
      { pattern: 'test/*.jpg',  watched: false, included: false, served: true },
      'src/**/__tests__/*.js'
    ],

    preprocessors: {
      'src/**/__tests__/*.js': [ 'webpack' ],
    },

    reporters: [ 'mocha', 'coverage' ],

    webpack: {
      devtool: 'inline-source-map',
      plugins: webpack_config.plugins
      resolve: webpack_config.resolve,

      module: {
        loaders: webpack_config.loaders,
        postLoaders: [
          {
            test: /\.jsx*$/,
              exclude: /(__tests__|node_modules|bower_components)\//,
              loader: 'istanbul-instrumenter'
          }
        ]
      }
    }
  });
};
