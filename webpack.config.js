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
            { test: /\.js$/, include: /src/, loader: 'babel'},
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: 'style?-singleton!css!less'},
            { test: /\.png$/, loader: 'file'},
            { test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }

            // ,
            // // expose window.jQuery. causes strange knockout bugs when not available
            // { test: /jquery\.js$/, loader: 'expose?jQuery' }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.ContextReplacementPlugin(/moment\/locale$/, /en|es/)
        // ,
        // new webpack.ProvidePlugin({
        //     jQuery: "jquery",
        //     $: "jquery",
        //     'window.jQuery': 'jquery',
        //     jquery: 'jquery'
        // })
    ],
    resolve: {
        root: [path.join(__dirname, 'src'), path.join(__dirname, "bower_components")],
        extensions: ["", ".webpack.js", ".web.js", ".js"],
    }
};
