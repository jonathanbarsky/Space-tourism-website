const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './dist/bundle.js',
        publicPath: '/'
    },
    resolve: {
       extensions: ['.js', '.jsx'],
       alias: {
        '@crew': path.resolve(__dirname,'./assets/crew/'),
        '@destination': path.resolve(__dirname,'./assets/destination/'),
        '@home': path.resolve(__dirname,'./assets/home/'),
        '@icons': path.resolve(__dirname,'./assets/shared/'),
        '@technology': path.resolve(__dirname,'./assets/technology/'),
        '@assets': path.resolve(__dirname,'./assets/'),
       },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            { 
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jp(e*)g|gif)$/,
                type: 'asset'
            }
            // {
            //     test: /\.svg$/,
            //     use: [
            //         {
            //             loader: 'svg-loader',
            //             options: {
            //                 limit: 10000,
            //             },
            //         },
            //     ],
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './public/index.html',
                filename: './index.html'
            }
        ),
        new MiniCssExtractPlugin({
            filename: '[name.css'
        })
    ],
    devServer: {
        historyApiFallback: true,
    }
}