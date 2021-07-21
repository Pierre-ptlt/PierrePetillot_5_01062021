const path = require('path');

module.exports = {
    entry: ['./js/main.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist')
      }
};