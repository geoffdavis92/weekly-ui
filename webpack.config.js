const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    ecommerceListing: path.resolve(__dirname, "src/01-ecommerce-listing/demo.jsx"),
    searchBar: path.resolve(__dirname, "src/02-search-bar/demo.jsx")
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/")
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      EcommerceListing: path.resolve(__dirname, "src/01-ecommerce-listing/"),
      SearchBar: path.resolve(__dirname, "src/02-search-bar/"),
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
