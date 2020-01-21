module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000/posts/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}

