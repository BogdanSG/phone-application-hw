"use strict";

const path = require('path');

module.exports = {

    mode: "development",
    devtool: "source-map",
    entry: "./application/app.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname , "public/js")
    },
    watch: true

};