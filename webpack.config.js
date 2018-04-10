const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    ecommerceListing: "src/ecommerce.jsx"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/")
  },
  resolve: {
    extensions: [".ts", ".tsx"],
    alias: {
<<<<<<< HEAD
      EcommerceListing: path.resolve(__dirname, "src/ecommerce-listing/"),
=======
			EcommerceListing: path.resolve(__dirname, 'src/ecommerce-listing/'),
>>>>>>> 142ff3b108e247bd83ea0569301a27f9d4496c26
      types: path.resolve(__dirname, "src/types"),
      utils: path.resolve(__dirname, "src/utils")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
