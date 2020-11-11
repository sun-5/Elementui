module.exports = {
  devServer: {
    port: 6666,
    open: true
    // proxy:{
    // }
  },
  // 配置scss全局变量
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  }
}
