module.exports = {
    entry:"./src/index.ts",
    mode:"development",
    module:{
        rules: [
            {
                test:/\.ts/,
                loader:'ts-loader',
            }
        ]
    }
}