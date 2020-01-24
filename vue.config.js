module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.0.16:3000/posts/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}

