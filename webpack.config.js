const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/client/index.tsx",
  output: {
    path: path.resolve(__dirname, "public/js"),
    publicPath: "/js/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    open: true,
    compress: true,
    openPage: "index.html",
    port: 9999,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
