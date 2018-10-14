const path = require('path')

module.exports = [{
    entry: {main:['./src', './styles/main.scss']},
    output: {path: path.resolve(__dirname, 'dist'), filename: 'main.js'},
    module: {
        rules: [{
            test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/, use: 'file-loader?name=[name].[ext]'
        },
            {
                test: /\.js$/,
                use: {loader: 'babel-loader',
                    options: {presets: ['@babel/preset-env']}}
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {name: 'bundle.css'},
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules']
                        }},
                ]
            }
        ]
    },
}];