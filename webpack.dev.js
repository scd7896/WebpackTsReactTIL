const path = require('path')
const fs = require('fs')
const files= fs.readdirSync(__dirname+'/src/pages')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var obj = files.reduce((o, val)=> { 
    const key = val.split('.')[0]
    o[key] = __dirname+'/src/pages/'+val; 
    return o; 
}, {});

module.exports = {
    mode: "development", devtool: "inline-source-map",
    entry: {
        "client": "./src/client.tsx"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.ts(x?)$/,
                exclude: "/node_modules/",
                use: [
                    "babel-loader","ts-loader"
                ]
            },
            {
                test: /\.scss$/,
                
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",

                    },
                    {
                        loader: "sass-loader"
                    }     
                ]
            },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index_dev.html'
        })
    ],
    output: {
        filename: "client.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist',
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 10023,
        hot: true,
        publicPath: '/',
    }
};
