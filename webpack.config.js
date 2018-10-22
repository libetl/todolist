const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')

module.exports = [{
    entry: {main:['./src', './styles/main.scss',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000']},
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
                test: /\.vue$/,
                loader: 'vue-loader'
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
    resolve: {
        extensions: ['.json','.js','.vue','.scss','.css']
    },
    plugins: [new VueLoaderPlugin(), new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({title: 'Webpack todo app'}),
        new HtmlWebpackIncludeAssetsPlugin({ assets: ['bundle.css'], append: true })],
    devServer: {
      hot: true,
      contentBase: path.resolve(__dirname, 'dist'),
      compress: true,
      port: 9000,
  }
}];
