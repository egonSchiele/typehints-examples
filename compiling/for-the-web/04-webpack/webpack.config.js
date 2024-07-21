const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
