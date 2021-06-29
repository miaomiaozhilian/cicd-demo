module.exports = {
  devServer: {
    port: process.env.PORT || 9999,     // 端口
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/styles/variables.scss";'
      }
    }
  }
}
