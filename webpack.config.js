import webpack from 'webpack';
import path from 'path';
import camelCase from 'camelcase';
//import pkg from './package.json';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const webpackConfig = {
  mode: 'production',
  entry: "./src/index.js",
  optimization: {
    minimize: false
  },
  output: {
    filename: `${"uc-react-notifications"}.js`,
    path: path.resolve(dirname(fileURLToPath(import.meta.url)), 'dist'),
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },

    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  devServer: {
    static: {
      directory: path.join(dirname(fileURLToPath(import.meta.url)), './example/src/'),
    }
  },
};

export default webpackConfig;
