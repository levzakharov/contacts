const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const failPlugin = require('webpack-fail-plugin');
const path = require('path');
/* global __dirname, process */

const isProd = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: getEntry(),

    output: {
        path: path.join(__dirname, 'target', 'classes', 'META-INF', 'resources', 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    //devtool: 'cheap-module-source-map',
    devtool: 'source-map',

    eslint: {
        configFile: './.eslintrc'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        preLoaders: [
            {test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/}
        ],
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.css$/, loader: ExtractTextWebpackPlugin.extract('style', 'css')},
            {test: /\.scss$/, loader: ExtractTextWebpackPlugin.extract('style', 'css!sass')},
            {test: /\.less$/, loader: ExtractTextWebpackPlugin.extract('style', 'css!less')},
            {test: /\.(png|jpg)$/, loader: 'url?limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest

            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff(2)?)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?prefix=font/&limit=8192'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=image/svg+xml'}
        ]
    },

    plugins: getPlugins()
};

function getEntry() {
    const entry = [];
    if (!isProd) {
        entry.push(
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch'
        );
    }
    entry.push(
        'babel-polyfill',
        'whatwg-fetch',
        path.join(__dirname, 'src', 'main', 'app', 'modules', 'main')
    );
    return entry;
}

function getPlugins() {
    const plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(isProd ? 'production' : 'development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextWebpackPlugin('bundle.css'),
        failPlugin
    ];
    if (isProd) {
        plugins.push(
            new webpack.optimize.OccurrenceOrderPlugin(true),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    screw_ie8: true,
                    warnings: false
                },
                comments: false
            })
        );
    }
    return plugins;
}