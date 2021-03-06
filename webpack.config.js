var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'hello.xkh.js',
        library: 'xkh',
        libraryTarget: 'umd'
    }
};