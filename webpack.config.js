var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./client/src/index.es",
    output: {
        path: __dirname + '/client/dist',
        filename: "scripts/scripts.bundle.js"
    },
    devtool: 'source-map',
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
        ]
    },
    watch: true,
    //generate html template for application
    plugins: [new HtmlWebpackPlugin({
        title: 'JS Game',
        template: './client/src/index.template.pug'
    })]
};
