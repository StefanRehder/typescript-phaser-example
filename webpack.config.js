'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

var distDir = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/main.ts',

    resolve: {
        extensions: ['.js', '.ts']
    },

    devtool: 'inline-source-map',

    output: {
        path: distDir,
        filename: 'main_bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      disable: true
                    },
                  },
                ],
            }
        ]
    },

    devServer: {
        contentBase: './dist'
    },


    plugins: [
        new CleanWebpackPlugin([distDir]),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};
