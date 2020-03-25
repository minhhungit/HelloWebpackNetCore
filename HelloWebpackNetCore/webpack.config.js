const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './clientapp/index.js',
        print: './clientapp/printMe.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'wwwroot/dist')
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: '[name].bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        //new HtmlWebpackPlugin({
        //    title: 'Output Management',
        //}),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ]
            }
        ],
    }
};