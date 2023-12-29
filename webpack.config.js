const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    mode: isProduction ? "production" : "development",
    entry: {
      main: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].bundle.js",
      publicPath: "/<название-репозитория>/", // Например, /first/ - замените на ваше название репозитория
    },
    devServer: {
      historyApiFallback: true,
      port: 8080,
      static: {
        directory: path.resolve(__dirname, "dist"),
        serveIndex: true,
        staticOptions: {
          setHeaders: {
            "Content-Type": "text/css",
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "webpack Boilerplate",
        template: path.resolve(__dirname, "./src/index.html"),
        filename: "index.html",
      }),
      new CleanWebpackPlugin(),
      isProduction &&
        new MiniCssExtractPlugin({
          filename: "styles/[name].css",
        }),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(scss|css)$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.html$/,
          loader: "html-loader",
        },
      ],
    },
  };
};
