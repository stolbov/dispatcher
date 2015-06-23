var ExtractTextPlugin = require('extract-text-webpack-plugin');

var PROD = process.env.NODE_ENV === 'production';
module.exports = {

    entry: './src/js/app.js',

    output: {
        path: __dirname + '/build',
        filename: 'js/bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
    },

    module: {
        loaders: [

            {test: /\.jsx$/, loader: 'jsx-loader'}
        ]
    },

    devtool: '#inline-source-map'

};
