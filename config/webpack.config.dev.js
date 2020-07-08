const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// PATH
// const appDirectory = fs.realpathSync(process.cwd());
// const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
// const path = {
//   appSrc: resolveApp("src"),
// };

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../build"),
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "../build"),
    index: "index.html",
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["react"],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: "/node_modules",
        loader: require.resolve("babel-loader"),
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: cssRegex,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              // camelCase: true,
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: sassRegex,
        use: [
          "style-loader",
          {
            loader: require.resolve("css-loader"),
            options: {
              modules: true,
              // camelCase: true,
              sourceMap: true,
            },
          },
          {
            loader: require.resolve("sass-loader"),
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: [path.resolve(__dirname, "../styles")],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      favicon: "public/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CleanWebpackPlugin(),
  ],
};
