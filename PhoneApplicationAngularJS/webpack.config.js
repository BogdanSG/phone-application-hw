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
    devtool: "source-map",
    watch: true,
    devServer:{
        hot: true,
    }


};
