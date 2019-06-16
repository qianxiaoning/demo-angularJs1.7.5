process.env.NODE_ENV = 'development';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode:'development',
  devtool: 'eval-source-map',// cheap-eval-source-map cheap-module-eval-source-map
  devServer:{
    contentBase:false,
    // host:'localhost',
    // port:'8080',
    // open:true,//自动拉起浏览器
    hot:true,//热加载
  },
  module: {
    rules: [
      {
        test:/\.less$/,
        use: [
            {
                loader: 'style-loader' // 样式热替换，creates style nodes from JS strings
            },
            {
                loader: 'css-loader' // translates CSS into CommonJS
            },
            {
                loader: 'less-loader', // compiles Less to CSS
                options: {
                    // 为了兼容babel-plugin-import ant
                    javascriptEnabled: true
                }
            }
        ]                
      }
    ]
  },
  plugins:[
    // 热替换
    new webpack.HotModuleReplacementPlugin(),
    // html模板
    new HtmlWebpackPlugin({
        title: 'webpack demo',
        filename:'index.html',
        template: 'src/index.html',
        // favicon: 'fav.ico',
        inject: true
    }),
  ]
});