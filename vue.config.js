const path = require("path");

module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  publicPath: process.env.NODE_ENV === "production" ? "/Portfolio/gtpuritas/" : "/",
  outputDir: path.resolve(__dirname, "gtpuritas"),
  productionSourceMap: false,
};
