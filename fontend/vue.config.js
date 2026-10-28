module.exports = {
  publicPath: '/ocr/',
  outputDir: '../backend/dist/TrWebOcr_fontend',
  // productionSourceMap: true,
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    proxy:{
      '/ocr/api':{
        target: 'http://' + process.env.PROXY,
        changeOrigin:true,
      }
    }

  },

}