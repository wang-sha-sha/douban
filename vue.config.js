module.exports = {
    devServer: {
        open: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                "com": "@/components",
                "uu": "@/util",
                "api": "@/api"
            }
        }
    }
}