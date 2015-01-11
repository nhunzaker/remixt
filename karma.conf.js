var webpack_config = require('./webpack.config');

module.exports = function(config) {
  config.set({

    browsers: [ 'Chrome' ],
    frameworks: [ 'mocha', 'sinon-chai' ],

    files: [
      'src/**/__tests__/*.js*'
    ],

    preprocessors: {
      'src/**/__tests__/*.jsx*': [ 'webpack' ]
    },

    reporters: [ 'coverage', 'mocha' ],

    webpack: {
      devtool : 'inline-source-map',
      output  : webpack_config.output,
      plugins : webpack_config.plugins,
      resolve : webpack_config.resolve,
      module  : {
        preLoaders  : webpack_config.module.preLoaders,
        loaders     : webpack_config.module.loaders,
        postLoaders : [
          {
            test: /\.jsx*$/,
            exclude: /(__tests__|node_modules)\//,
            loader: 'istanbul-instrumenter'
          }
        ]
      },
    },

    webpackMiddleware: {
      noInfo: true
    }

  });
};
