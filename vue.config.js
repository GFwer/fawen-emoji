module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fawen-emoji/'
    : '/',
  outputDir: './docs',
  transpileDependencies: [
    'vuetify',
  ],

  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
};
