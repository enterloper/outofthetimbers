const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglyifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => ({
  mode: env.production ? 'production' : 'development',
  devServer: {
    // https: true,
    // index: 'index.html',
    // port: 8080,
    // proxy: {
    //   context: ['/auth', '/api'],
    //   target: 'http://localhost:4040', // 'https://localhost:4040',
    // },
    // publicPath: '/assets', // sets bundle to http:localhost:4040/assets/bundle.js
  },
  devtool: env.production ? 'eval' : 'source-map',
  entry: {
    main: './src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
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
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|psd|svg|jpg|gif)$/,
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
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
    }),
    new WebpackMd5Hash(),
  ],
  optimization: {
    minimizer: argv['optimize-minimize'] ? [new UglyifyJsPlugin()] : [],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      layouts: path.resolve(__dirname, 'src/layouts'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
});
