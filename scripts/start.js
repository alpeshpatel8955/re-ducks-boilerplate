'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'development';
process.env.PORT = 3000;
process.env.HOST = '127.0.0.1';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('react-dev-utils/chalk');
const openBrowser = require('react-dev-utils/openBrowser');

const configFactory = require('../config/webpack.config');
const createDevServerConfig = require('../config/webpackDevServer.config');

const config = configFactory('development');
const serverConfig = createDevServerConfig();

const PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '127.0.0.1';

console.log(
    chalk.cyan(
        `Attempting to bind to HOST environment variable: ${chalk.yellow(
            chalk.bold(process.env.HOST)
        )}`
    )
);

const devServer = new WebpackDevServer(webpack(config), serverConfig);
// Launch WebpackDevServer.
devServer.listen(PORT, HOST, err => {
    if (err) {
        console.log(err);
    }
    console.log(chalk.cyan('Starting the development server...\n'));
    // console.log('WebpackDevServer listening at localhost:', PORT, HOST);
    openBrowser('http://localhost:' + PORT);
});
