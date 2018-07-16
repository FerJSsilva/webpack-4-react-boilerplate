const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge (common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, '../dist')], {
            root: process.cwd(),
            verbose: true, 
            dry: false
        })
    ],
});