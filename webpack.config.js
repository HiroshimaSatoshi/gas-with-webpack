const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const GasPlugin = require("gas-webpack-plugin");
const { EnvironmentPlugin } = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "tsconfig.json"),
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [
    new EnvironmentPlugin({ ...process.env }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `src/*.json`,
          to: `[name][ext]`,
        },
      ],
    }),
    new GasPlugin(),
  ],
};
