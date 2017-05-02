const path = require('path');
const { DefinePlugin, LoaderOptionsPlugin, optimize } = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || '';
const isProduction = nodeEnv === 'production';

const prodPlugins = [
    new LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
    new optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
            screw_ie8: true,
            keep_fnames: true
        },
        compress: {
            screw_ie8: true
        },
        comments: false
    }),
];

const plugins = [
    new WebpackNotifierPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'client/index.html',
        chunks: ['application']
    }),
    new DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(nodeEnv || '')
        }
    }),
    // new FaviconsWebpackPlugin({
    //     logo: './client/src/assets/icon.png',
    //     persistentCache: true,
    //     inject: true,
    //     background: '#fff',
    //     title: 'WebKnight',
    //     icons: {
    //         android: true,
    //         appleIcon: true,
    //         appleStartup: true,
    //         coast: false,
    //         favicons: true,
    //         firefox: true,
    //         opengraph: false,
    //         twitter: false,
    //         yandex: false,
    //         windows: false
    //     }
    //}),
];

module.exports = {
    entry: {
        'application': './client/index.jsx',
    },
    output: {
        path: path.resolve(`${__dirname}/server/static/`),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [ path.resolve(`${__dirname}/client/src/`), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.scss?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.less?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    'less-loader',
                ]
            },
            {
                test: /\.png?$/,
                use: [
                    'file-loader?name=[name].[ext]',
                ]
            },
        ]
    },
    devtool: isProduction ? '' : 'source-map',
    plugins: isProduction ? prodPlugins.concat(plugins) : plugins,
};
