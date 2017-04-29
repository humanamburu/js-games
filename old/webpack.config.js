const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//plugins
const plugins = [];
const htmlPlugin = new HtmlWebpackPlugin({
    title: 'Web Knight',
    template: './client/src/index.template.pug'
});
const defineProcessPlugin = new Webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || '')
    }
});
const uglifyPlugin = new Webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
});

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
