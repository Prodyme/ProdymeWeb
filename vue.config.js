module.exports = {
    publicPath: '',
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/styles/common.scss";`
            }
        }
    }
};