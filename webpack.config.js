// const path = require('path');
// const pkg = require('./package.json');
// const webpack = require("webpack");

// const nodeExternals = require('webpack-node-externals');

// module.exports = {
//   entry: "./src/index.js",
//   mode: 'production',
//     output: {
//       path: path.resolve(__dirname, 'dist'),
//       filename: "index.js",
//       library: pkg.name,
//       libraryTarget: "commonjs2"
//     },
//     module: {
//       rules: [
//         {
//           test: /\.(js|jsx)$/,
//           exclude: /node_modules/,
//           use: {
//             loader: "babel-loader"
//           }
//         },
//         {
//           test: /\.css$/i,
//           use: ["style-loader", "css-loader"]
//         },
//         {
//           test: /\.(png|jpg|gif)$/i,
//           use: {
//             loader: 'url-loader',
//             options: {
//               limit: 8192
//             }
//           }
//         }
//       ]
//   },
  
//      resolve: {
//     alias: {
//       'react': path.resolve(__dirname, './node_modules/react'),
//       'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
//     }
//   },
//     target: 'node',
//     // externals: [nodeExternals(),'react': 'React'}]
//   externals: [
//     nodeExternals(),
//     {
//     // Don't bundle react or react-dom      
//     react: {
//       commonjs: "react",
//       commonjs2: "react",
//       amd: "React",
//       root: "React"
//     },
//     "react-dom": {
//       commonjs: "react-dom",
//       commonjs2: "react-dom",
//       amd: "ReactDOM",
//       root: "ReactDOM"
//     }
//   }]
// };

var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve("build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  externals: {
    react: "react"
  }
};