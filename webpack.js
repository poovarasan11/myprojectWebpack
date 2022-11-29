const path = require("path");
const nodeExternals = require("webpack-node-externals")

module.exports = {
    entry: path.resolve(__dirname, './index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server-bundle.js',

    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        watch: true,
        rules: [
            {
                test: /\.m?s$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}

