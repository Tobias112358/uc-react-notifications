import webpack from 'webpack';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const packageName = 'react-notifications';

const webpackConfig = {
  mode: 'production',
  entry: "./src/index.ts",
  //devtool: 'inline-source-map',
  optimization: {
    minimize: false
  },
  output: {
    filename: `${packageName}.js`,
    library: {
      type: 'module',
    },
    path: path.join(dirname(fileURLToPath(import.meta.url)), './dist/'),
    publicPath: '',
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /(?<!\.d)\.ts(x?)$/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            
          },
          { 
            loader: 'css-loader',

     
          }]
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
        type: 'asset/inline'
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
    alias: {
      fonts: path.join(dirname(fileURLToPath(import.meta.url)), './src/fonts/'),
    },

  },
  externals: {
    react: "react",
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
    new webpack.BannerPlugin({
      banner: `import "./${packageName}.css"`,
      raw: true,
      exclude: `${packageName}.css`
    }),

  ],
  devServer: {
    static: {
      directory: path.join(dirname(fileURLToPath(import.meta.url)), './example/src/'),
    }
  },
};

export default webpackConfig;
