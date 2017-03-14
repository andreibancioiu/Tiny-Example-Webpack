const path = require('path');

const config = {
    entry: {
        app: './js/my/app.js',
        vendor: './js/vendor/all.js',
        greeter: './ts/greeter.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        }, ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};

module.exports = config;
