const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.base.js");
const TerserPlugin = require("terser-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const config = merge(common, {
    mode: "production",
    plugins: [
        // new BundleAnalyzerPlugin({
        //     analyzerPort: 8888
        // }),
    ],
    entry: "./src/lib/index.js",
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/",
        libraryTarget: "umd",
        library: "TestSdk",
        globalObject: "this"
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin()
        ]
    }
});

module.exports = config;