const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: {
        "vtl-2-0-antlr-tools-ts": "./src/index.ts",
        "vtl-2-0-antlr-tools-ts.min": "./src/index.ts",
    },
    output: {
        path: path.resolve(__dirname, "_bundles"),
        filename: "[name].js",
        libraryTarget: "umd",
        library: "vtl-2-0-antlr-tools-ts",
        umdNamedDefine: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    devtool: "source-map",
    plugins: [],
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.g4?$/,
                loader: "raw-loader",
                exclude: /node_modules/,
            },
        ],
    },
};
