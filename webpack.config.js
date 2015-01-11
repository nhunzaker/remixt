var Webpack           = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  debug   : true,
  devtool : 'inline-source-map',

  entry: {
    'application' : './src/index.jsx'
  },

  output: {
    filename: 'assets/js/[name].js',
    path: '.',
    publicPath: '/',
    devtoolModuleFilenameTemplate: '[resource-path]'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
    modulesDirectories: [ 'web_modules', 'node_modules', 'src']
  },

  plugins: [
    new ExtractTextPlugin("assets/css/application.css"),
    new Webpack.ProvidePlugin({
      to5Runtime: "imports?global=>{}!exports-loader?global.to5Runtime!6to5/runtime"
    })
  ],

  module: {
    preLoaders: [
      {
        test: /\.jsx*$/,
        exclude : /node_modules/,
        loader: "source-map-loader"
      }
    ],
    loaders: [
      {
        test    : /\.s*(c|a)ss$/,
        loader  : ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader')
      },
      {
        test    : /\.jsx*$/,
        exclude : /node_modules/,
        loader  : 'envify!6to5?experimental&runtime&modules=common',
      },
      {
        test    : /\.json$/,
        loader  : 'json-loader'
      }
    ]
  }
}
