const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglyifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => ({
  mode: env.production ? 'production' : 'development',
  devtool: env.production ? 'eval' : 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|png|psd|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new WebpackMd5Hash(),
  ],
  optimization: {
    minimizer: argv['optimize-minimize'] ? [new UglyifyJsPlugin()] : [],
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'assets'),
      components: path.resolve(__dirname, 'src/components/'),
      pages: path.resolve(__dirname, 'src/pages'),
      styles: path.resolve(__dirname, 'src/styles'),
      utility: path.resolve(__dirname, 'src/utility'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
});
