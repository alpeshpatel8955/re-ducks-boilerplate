const path = require('path');
const fs = require('fs');

// process.cwd() returns the current working directory
// i.e. the directory from which you invoked the node command.
const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
    appPath: path.resolve(appDirectory, "."),
    appIndexJs: path.resolve(appDirectory, "src/index.jsx"),
    appBuild: path.resolve(appDirectory, "build"),
    appSrc: path.resolve(appDirectory, "src"),
    appPackageJson: path.resolve(appDirectory, "package.json"),
    appNodeModules: path.resolve(appDirectory, "node_modules"),
    appPublic: path.resolve(appDirectory, "public"),
    appHtml: path.resolve(appDirectory, "public/index.html"),
}