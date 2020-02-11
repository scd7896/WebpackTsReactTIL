const path = require('path')

module.exports = {
    mode: "development", devtool: "inline-source-map",
    entry: {
        first: "./src/pages/test",
        second: "./src/pages/test2"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.ts(x?)$/,
                use: [
                    "awesome-typescript-loader",
                ]
            },
            {
                test: /\.scss$/,
                
                use: [
                    {
                        loader: "style-loader"
                    },
                    { 
                        loader: "css-modules-typescript-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: "sass-loader"
                    }     
                ]
            },
        ]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist',
    },
    
};
