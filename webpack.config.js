const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },

    resolve: {
        extensions: [".js", ".jsx"],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        sourceType: "unambiguous",
                        presets: [
                            ["@babel/preset-env"],
                            ["@babel/preset-react", { runtime: "classic" }],
                        ],
                        plugins: ["@babel/plugin-transform-modules-commonjs"],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: "asset/resource",
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],

    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
};