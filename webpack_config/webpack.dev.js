const path = require('path');

module.exports = {
  mode: "development",
  devtool: 'sourcemap',
  devServer: {
    disableHostCheck: true,
    contentBase: 'dist'
  }
};
