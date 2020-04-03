const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    target: 'node',
    node: false,
    entry: {
        server: './server.tsx',
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: './'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'babel-loader', 'ts-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    // css-loader
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true
                      }
                    },
                    // sass-loader
                    { loader: 'sass-loader' }
                  ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss']
    },
    externals: [nodeExternals()]
}