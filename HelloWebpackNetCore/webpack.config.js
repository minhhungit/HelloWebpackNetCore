const path = require('path');
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
        filename: '[name].bundle.js',        
        publicPath: '/dist/'
    },
    plugins: [
        new CleanWebpackPlugin()
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