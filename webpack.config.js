module.exports = {
    mode : 'production',
    devtool : 'source-map',
    entry : {
        first : './src/pages/test',
        second : './src/pages/test2'
    },
    resolve :{
        extensions: [".ts", ".tsx"]
    },

    module : {
        rules : [
            {
                test : /\.ts(x?)$/,
                exclude : '/node_modules/',
                use : [
                    {
                        loader: 'ts-loader'
                    }
                ]    
            },{
                enforce : 'pre',
                test : /\.js(x?)$/,
                loader : 'source-map'
            }
            
        ]
    }, externals : {
        "react" :"React",
        "react-dom" : "ReactDOM"
    }
}