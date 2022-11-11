const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  output: {
    filename: 'app.bundle.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new NodePolyfillPlugin(),
    new HtmlWebPackPlugin({
      //inject: true, //Hacer la incersión de los elementos
      template: 'src/index.html',
      //filename: './index.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyWebPackPlugin({
      patterns: [
        {
          from: './src/assets',
          to: './assets',
        },
        {
          from: './src/res',
          to: './res',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader',
      },
      {
        test: /\m?.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css|.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          //'style-loader', //se usa el style loader o el mini extract css

        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.scss$/,
        loader:  'sass-loader' //igual solo se usa el mini extract o este,
      },
    ],
  },
};
