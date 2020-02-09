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
                test: /\.ts(x?)$/,
                exclude: "/node_modules/",
                use: [
                    "ts-loader",
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
    externals: {
        react: "React",
        "react-dom": "ReactDOM"
    },
    output: {
        filename: "[name].js",
        path: __dirname+'/dist'
    }
};
