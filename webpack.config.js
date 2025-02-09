import webpack from 'webpack';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const packageName = 'react-notifications';

const webpackConfig = {
  mode: 'production',
  entry: "./src/index.js",
  optimization: {
    minimize: false
  },
  output: {
    filename: `${packageName}.js`,
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
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
    }),
    new MiniCssExtractPlugin({
      filename: `${packageName}.css`,
    }),
  ],
  devServer: {
    static: {
      directory: path.join(dirname(fileURLToPath(import.meta.url)), './example/src/'),
    }
  },
};

export default webpackConfig;
