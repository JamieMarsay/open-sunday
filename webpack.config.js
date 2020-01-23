const webpack = require("webpack");
const path = require("path");
const MiniCssExtract = require("mini-css-extract-plugin");
const HTMLTemplate = require("html-webpack-plugin");

module.exports = (env, options) => {
  return {
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
      publicPath: "/"
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        ["@Components"]: path.resolve(__dirname, "./src/components/"),
        ["@TestData"]: path.resolve(__dirname, "./src/testData/"),
        ["@Context"]: path.resolve(__dirname, "./src/context/"),
        ["@Assets"]: path.resolve(__dirname, "./src/assets/"),
        ["@Views"]: path.resolve(__dirname, "./src/views/"),
        ["@Utils"]: path.resolve(__dirname, "./src/utils/")
      }
    },
    
    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      historyApiFallback: true
    },
    plugins: [
      new HTMLTemplate({
        favicon: path.resolve(__dirname, "src/favicon.ico"),
        template: path.resolve(__dirname, "src/index.html"),
        title: "Open Sunday",
        filename: "index.html"
      }),
      new MiniCssExtract({
        filename:
          options.mode === "development" ? "[name].css" : "[name].[hash].css",
        chunkFilename:
          options.mode === "development" ? "[id].css" : "[id].[hash].css"
      }),
    ],
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.(ts|tsx)$/,
          use: "ts-loader"
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        },
        {
          test: /\.(s*)css$/,
          use: [
            {
              loader: MiniCssExtract.loader,
              options: {
                hmr: options.mode === "development"
              }
            },
            { loader: "css-loader", options: { importLoaders: 1 } },
            {
              loader: "postcss-loader",
              options: require("./postcss.config")
            },
            "sass-loader"
          ]
        },
        {
          test: /\.(png|svg|jpg|gif|ttf)$/,
          use: ["file-loader"]
        },
      ]
    }
  };
};
