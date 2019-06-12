const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: ['babel-polyfill','./src/app.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { 
                    loader:'babel-loader'
                }
            },
            {
                test:/\.(s*)css$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
             }
        ]
    },
    stats: {
        warnings: false
      },
    watch: true
};