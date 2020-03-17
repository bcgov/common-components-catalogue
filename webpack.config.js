const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

/** rules for dev / prod */
const getRules = (isDevelopment) => [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
  },
  {
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader', 
      'css-loader', 
      'sass-loader'
    ],
  },
  {
    test: /\.css$/i, 
    use: [
      MiniCssExtractPlugin.loader,
    ],
  },
  {
    test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
    loader: 'url-loader?limit=100000',
  },
];

/** plugins for dev / prod */
const getPlugins = (isDevelopment) => [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: 'Common Components Catalogue',
    template: './src/index.html',
  }),
  new webpack.EnvironmentPlugin({ API_URL: 'http://localhost:5000/api' }),
  new MiniCssExtractPlugin({
    filename: isDevelopment ? '[name].css' : '[name].[hash].css',
    chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
  }),
];

/** base configuration */
const config = {
  entry: './src/index.js',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: './',
    filename: 'bundle.js',
  },
};

const prodConfig = {
  ...config,
  name: 'prod',
  mode: 'production',
  module: {
    rules: getRules(false),
  },
  plugins: getPlugins(false),
  performance: { hints: false }
};

const devConfig = {
  ...config,
  name: 'dev',
  mode: 'development',
  module: {
    rules: getRules(true),
  },
  plugins: getPlugins(true),
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    writeToDisk: true,
    host: HOST,
    port: PORT,
  },
};

module.exports = [prodConfig, devConfig];
