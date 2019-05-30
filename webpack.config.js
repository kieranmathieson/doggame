module.exports = {
    entry: "./src/app.ts",
    devtool: "source-map",
    output: {
        filename: "./bundle.js"
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            }
        ]
    }
};