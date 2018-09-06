const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode:'development',
    module: {
        rules : [
            {
                test:/\.js$/,
                loader: 'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    
                ]
            }
        ]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        compress: true
    }
}