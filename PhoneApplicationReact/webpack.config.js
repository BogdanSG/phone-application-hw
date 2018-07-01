'use strict';

const path = require('path');


module.exports = {

    mode: "production",
    entry: {
        fileName: "./front-end/app.js"
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname , "public/js"),
        publicPath: "/public/"
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: { presets: ["react"]  }
                    }
                ]
            }
        ]
    },
    devtool: "source-map",
    watch: true,
    devServer:{
        hot: true,
    }


};
