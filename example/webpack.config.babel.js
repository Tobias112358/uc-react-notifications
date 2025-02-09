import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const ENV = process.env.NODE_ENV || 'development';
const DEV = ENV === 'development';
const PROD = ENV === 'production';
const SOURCE_DIR = 'src';
const DEST_DIR = 'dist';
const PUBLIC_PATH = '/';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  mode: ENV,
  entry: path.join(__dirname, SOURCE_DIR, 'app.js'),
  output: {
    path: path.join(__dirname, DEST_DIR),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        use: ['css-loader'],
        test: /\.css$/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif|swf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/src/index.html'
    }),
    new LiveReloadPlugin()
  ]
};
