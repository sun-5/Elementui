module.exports = {
  devServer: {
    port: 6666,
    open: true
    // proxy:{
    // }
  },
  // 配置scss全局变量
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  }
}
