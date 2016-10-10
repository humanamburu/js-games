var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function isProduction() {
    return process.env.NODE_ENV === 'production';
}

module.exports = {
    entry: "./client/src/index.es",
    output: {
        path: __dirname + '/client/dist',
        filename: "scripts/scripts.bundle.js"
    },
    devtool: isProduction() ? '' : 'source-map',
    module: {
        loaders: [
            {
                test: /\.es?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
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
    //generate html template for application
    plugins: [
        new HtmlWebpackPlugin({
            title: 'JS Game',
            template: './client/src/index.template.pug'
        }),
        new Webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || '')
            }
        })
    ]
};
