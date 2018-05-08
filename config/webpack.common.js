
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports =  {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    path: __dirname + '/../dist',
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.vue/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          loaders: {
              sass: 'vue-style-loader!css-loader!sass-loader?'+
                  '{"includePaths":["app/sass"]}'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader'
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader',
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: __dirname + '/..',
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),
    new WebpackBuildNotifierPlugin({
      title: "Github Issue Visualizer Webpack Build",
      suppressSuccess: true
    }),
    new VueLoaderPlugin(),
  ],
}
