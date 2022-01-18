module.exports = {
  chainWebpack: (config) => {
    config.module.rule('images')
      .use('file-loader')
      .loader('image-webpack-loader')
      .tap((options) => {
        const ret = options || {};
        ret.pngquant = {
          quality: [0.65, 0.90],
          speed: 4,
        };
        return ret;
      });
  },
};
