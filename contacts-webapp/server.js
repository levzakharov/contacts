const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const port = 3000;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    // see http://webpack.github.io/docs/webpack-dev-middleware.html
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000 // force polling with the specified interval
    },
    historyApiFallback: true,
    stats: {
        colors: true
    }
}).listen(port, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }
    console.log(`Listening at localhost:${port}`);
});