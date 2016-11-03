var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
//plugins
var plugins = [];
var htmlPlugin = new HtmlWebpackPlugin({
    title: 'WSC',
    template: './client/src/index.template.pug'
});
var defineProcessPlugin = new Webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || '')
    }
});
var uglifyPlugin = new Webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
});

function isProduction() {
    return process.env.NODE_ENV === 'production';
}

plugins.push(htmlPlugin);
plugins.push(defineProcessPlugin);
if (isProduction()) {
    plugins.push(uglifyPlugin);
}

function isProduction() {
    return process.env.NODE_ENV === 'production';
}

module.exports = {
    entry: "./client/src/index",
    output: {
        path: __dirname + '/client/dist',
        filename: "scripts/scripts.bundle.js"
    },
    devtool: isProduction() ? '' : 'source-map',
    resolve: {
        root: path.join(__dirname, 'client/src/'),
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader?resolve url'
            },
            {
                test: /\.pug$/,
                loader: 'pug'
            },
            {
                test: /\.png$/,
                loaders: ['url-loader?limit=150000']
            },
            {
                test: /\.gif$/,
                loaders: ['url-loader?limit=150000']
            }
        ]
    },
    watch: !isProduction(),
    plugins: plugins
};
