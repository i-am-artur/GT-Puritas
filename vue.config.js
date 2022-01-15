const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/g2/" : "/",
  outputDir: path.resolve(__dirname, "g2"),
  productionSourceMap: false,
};
