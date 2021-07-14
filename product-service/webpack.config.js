const slsw = require("serverless-webpack")
const path = require("path")
const nodeExternals = require("webpack-node-externals")

// TODO:  паковать и делоить код каждой лямды отдельно а не вместе
// TODO: заставить вебпак генерить билд без серверлесса чтоб по этому билду гнать интергейшн тест и вообще смотреть как оно работает

module.exports = {
  entry: slsw.lib.entries,
  target: "node",
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  stats: "minimal",
  devtool: "nosources-source-map",
  performance: {
    hints: false
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  output: {
    libraryTarget: "commonjs2",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
    sourceMapFilename: "[file].map"
  },
  optimization: {
    minimize: false
  },
  externals: [nodeExternals()] // exclude external modules
}
