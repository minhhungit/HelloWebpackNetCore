const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './clientapp/index.ts',
        helloworld: './clientapp/helloworld.ts',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'wwwroot/dist')
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: '[name].[hash].bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Demo HtmlWebpackPlugin',
            template: './Views/Shared/_Layout.Template.ejs',
            filename: '../../Views/Shared/_Layout.cshtml',
            inject: false,
            minify: false,
            templateParameters: (compilation, assets, assetTags, options) => {
                return {
                    compilation,
                    webpackConfig: compilation.options,
                    htmlWebpackPlugin: {
                        tags: assetTags,
                        files: assets,
                        options,
                    },
                    'foo': "I'm Jin"
                }
            }
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
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
    },    
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
};