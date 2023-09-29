module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.csv$/,
          loader: 'csv-loader',
          options: {
            dynamicTyping: true,
            header: true,
            skipEmptyLines: true
          }
        }
      ]
    }
  },
  lintOnSave: false,
  pluginOptions: {
    lintStyleOnBuild: false,
    stylelint: {}
  },
  publicPath:
    process.env.NODE_ENV === 'production' && process.env.REPO_NAME
      ? 'https://raw.githubusercontent.com/wwwenyix/MentalRotationExample/gh-pages/' +
        __dirname.substring(process.env.GITHUB_WORKSPACE.length)
      : 'https://raw.githubusercontent.com/wwwenyix/MentalRotationExample/gh-pages/'
};
