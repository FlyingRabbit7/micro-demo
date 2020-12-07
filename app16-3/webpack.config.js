const webpack = require('webpack');
const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      // 'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    port: 8008,
    contentBase: './dist'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "react163",
      filename: "remoteEntry.js",
      // remotes: {
      //   app: "app@http://localhost:8000/remoteEntry.js",
      //   home: "home@http://localhost:3002/remoteEntry.js",
      // },
      exposes: {
        "./Content": "./src/components/Content.js",
        "./newReact": require.resolve("react"),
        "./newReactDOM": require.resolve("react-dom"),
      },
      // shared: [
      //   "react-dom",
      //   {
      //     react: {
      //       import: "react", // the "react" package will be used a provided and fallback module
      //       shareKey: "newReact", // under this name the shared module will be placed in the share scope
      //       shareScope: "default", // share scope with this name will be used
      //       singleton: false, // only a single version of the shared module is allowed
      //     },
      //     // reactNew: {
      //     //   import: "react", // the "react" package will be used a provided and fallback module
      //     //   shareKey: "reactNew", // under this name the shared module will be placed in the share scope
      //     //   shareScope: "modern", // share scope with this name will be used
      //     //   singleton: true, // only a single version of the shared module is allowed
      //     // },
      //   },
      // ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // new LodashModuleReplacementPlugin,
    // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    // new CleanWebpackPlugin()
  ],
  optimization: {
    // runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].[hash].js';
  }

  return config;
};