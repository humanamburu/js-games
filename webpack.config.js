const { DefinePlugin, LoaderOptionsPlugin, optimize } = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
        template: 'client/src/index.html',
        chunks: ['application']
    }),
    new DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(nodeEnv || '')
        }
    }),
];

module.exports = {
    entry: {
        'application': './client/src/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
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
                test: /\.styl?$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    'stylus-loader',
                ]
            },
        ]
    },
    devtool: isProduction ? '' : 'eval-source-map',
    plugins: isProduction ? prodPlugins.concat(plugins) : plugins,
};
