'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const fs = require('fs-extra');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const chalk = require('react-dev-utils/chalk');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const printBuildError = require('react-dev-utils/printBuildError');
const configFactory = require('../config/webpack.config');
const paths = require('../config/paths');

const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;
// Generate configuration
const config = configFactory('production');

// Remove all content but keep the directory so that
// if you're in it, you don't end up in Trash
fs.emptyDirSync(paths.appBuild);

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

// Start the webpack build
build().then(({ stats, warnings }) => {
    if (warnings.length) {
        console.log(chalk.yellow('Compiled with warnings.\n'));
        console.log(warnings.join('\n\n'));
        console.log(
          '\nSearch for the ' +
            chalk.underline(chalk.yellow('keywords')) +
            ' to learn more about each warning.'
        );
        console.log(
            'To ignore, add ' +
            chalk.cyan('// eslint-disable-next-line') +
            ' to the line before.\n'
        );
    } else {
        console.log(chalk.green('Compiled successfully.\n'));
    }
    console.log('File sizes after gzip:\n');
    printFileSizesAfterBuild(
        stats,
        { root: paths.appBuild, sizes: {} },
        paths.appBuild,
        WARN_AFTER_BUNDLE_GZIP_SIZE,
        WARN_AFTER_CHUNK_GZIP_SIZE
    );
},
err => {
    console.log(chalk.red('Failed to compile.\n'));
    printBuildError(err);
    process.exit(1);
}).catch(err => {
    if (err && err.message) {
        console.log(err.message);
    }
    process.exit(1);
});

// Create the production build and print the deployment instructions.
function build() {
    console.log('Creating an optimized production build...');
    let compiler = webpack(config);
    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            let messages;
            if (err) {
                if (!err.message) {
                    return reject(err);
                }
                messages = formatWebpackMessages({
                    errors: [err.message],
                    warnings: [],
                });
            } else {
                messages = formatWebpackMessages(
                    stats.toJson({ all: false, warnings: true, errors: true })
                );
            }
            if (messages.errors.length) {
                // Only keep the first error. Others are often indicative
                // of the same problem, but confuse the reader with noise.
                if (messages.errors.length > 1) {
                    messages.errors.length = 1;
                }
                return reject(new Error(messages.errors.join('\n\n')));
            }
            if (messages.warnings.length) {
                console.log(
                    chalk.yellow(
                        '\nTreating warnings as errors'
                    )
                );
                return reject(new Error(messages.warnings.join('\n\n')));
            }
            const resolveArgs = {
                stats,
                warnings: messages.warnings,
            };
            return resolve(resolveArgs);
        })
    });
}
