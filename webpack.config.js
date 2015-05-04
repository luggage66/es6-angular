var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        client: './src/app',
    },
    output: {
        // Make sure to use [name] or [id] in output.filename
        //  when using multiple entry points
        path: path.join(__dirname, 'app'),
        filename: "entry.[name].js",
        chunkFilename: "dependency.[id].js",
        publicPath: '/app/'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
            , { test: /\.html$/, loader: "ngtemplate?module=weatherApp&relativeTo=" + (path.resolve(__dirname, './src')) + "/!html" }
            //{ test: /\.css$/, loader: "style!css" },
            //{ test: /\.less$/, loader: 'style?-singleton!css!less'},
            //{ test: /\.png$/, loader: 'file'},
            //{ test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin()
    ],
    resolve: {
    }
};
