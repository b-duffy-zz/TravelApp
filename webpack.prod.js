
const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
    entry: './src/client/views/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images/'
                    }
              }
            },
              {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                use: {
                    loader: 'url-loader'
                }},
                {
                test: /\.html$./,
                use: {
                    loader: 'html-loader' }
                }
            ]
    },
            plugins: [
                new HtmlWebPackPlugin({
                    template: "./src/client/views/index.html",
                    filename: "./index.html"
                }),
                new MiniCssExtractPlugin({filename: '[name].css'}),
                new WorkboxPlugin.GenerateSW()
            ],
            output:{
                libraryTarget: 'var',
                library: 'Client'
            }
}