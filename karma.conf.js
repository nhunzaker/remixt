var webpack_config = require('./webpack.config');

module.exports = function(config) {
  config.set({

    browsers: [ 'Chrome' ],
    frameworks: [ 'mocha', 'sinon-chai' ],

    files: [
      'src/**/__tests__/*.js*'
    ],

    preprocessors: {
      'src/**/__tests__/*.js*': [ 'webpack' ]
    },

    reporters: [ 'mocha' ],

    webpack: {
      devtool : 'inline-source-map',
      plugins : webpack_config.plugins,
      resolve : webpack_config.resolve,
      module  : webpack_config.module
    },

    webpackMiddleware: {
      noInfo: true
    }

  });
};
