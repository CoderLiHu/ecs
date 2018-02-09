//import webpack from 'webpack';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool:'eval-source-map',
    entry:{
        main:['react-hot-loader/patch','webpack-hot-middleware/client',__dirname + '/app/main.js']
    },
    output:{
        path:__dirname + '/public',
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            "env","react","stage-0"
                        ],
                        plugins:[
                            ['react-hot-loader/babel'],
                        ]
                    }
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        {
                            loader:'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        },
                        {
                            loader:'postcss-loader',
                            options: {
                                plugins:function(){
                                    return [
                                        require('autoprefixer')
                                    ]
                                }
                            }
                        }
                    ]
                })

            },
        ]
    },
    plugins:[
        new ExtractTextPlugin('styles.css'),
        new webpack.BannerPlugin('版权所有，侵权必究'),
        new HtmlWebpackPlugin({
            template:__dirname + '/app/index.tmpl.html',
            favicon: __dirname + '/public/favicon.png',
            inject:'body',
            filename:'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            minChunks:function(module){
                return module.context && module.context.indexOf('react') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'common'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}