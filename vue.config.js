module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.0.16:3000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                    @import "~@/assets/scss/_variables.scss";
                    @import "~@/assets/scss/_mixins.scss";`
            }
        }
    }

}

