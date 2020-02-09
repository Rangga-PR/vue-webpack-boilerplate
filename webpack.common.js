const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: file => /node_module/.test(file) && !/\.vue\.js/.test(file),
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(svg|ico|png|jpg|jpeg|gif|webp)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name]-[hash].[ext]",
            outputPath: path.resolve(__dirname, "dist/assets/imgs"),
          },
        },
      },
    ],
  },
};
