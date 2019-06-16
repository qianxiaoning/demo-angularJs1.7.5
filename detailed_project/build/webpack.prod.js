process.env.NODE_ENV = 'production';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode:'production',
  devtool:'source-map',
  module:{
    rules:[
      {
        test: /\.(css|less|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",          
          "less-loader"
        ]            
      }        
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[hash:8].css",
    }),
    new CleanWebpackPlugin(
      // 自动清除output.path下目录
      {
        verbose:true
      }
    ),
    // html模板
    new HtmlWebpackPlugin({
      // 设置生成的index.html的title，设置template模板后会被覆盖
      title: 'webpack demo',
      // html生成子目录，默认为output.path也就是dist/下
      filename:'index.html',
      template: 'src/index.html',
      // favicon: 'fav.ico',
      // 注入方式。true,'body'使js资源放入body底部。'head'使js资源放入body头部
      inject: true,
      // 使变小
      minify: {
        // 去除html注释
        removeComments: true,
        // 去除html空格
        collapseWhitespace: true,
        // 尽可能去除属性引号
        removeAttributeQuotes: true
      }
    })  
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        // 开启缓存
        cache: true,
        // 压缩需要
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({}),      
    ],
    // splitChunks:{
    //   // 使用默认配置
    //   chunks:'all',
    //   // 至少有2个entry文件引用重复时分离
    //   minChunks: 2
    //   // cacheGroups: {
    //   //   vendors: {
    //   //     // test: /[\\/]node_modules[\\/](react|react-dom|antd|echarts-for-react|prop-types|jquery|moment|postal)[\\/]/,
    //   //     // test: /[\\/]dll[\\/](react|react-dom)[\\/]/,
    //   //     // test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
    //   //     test: /[\\/]node_modules[\\/]/,
    //   //     // name: 'vendors',
    //   //     priority: -9,
    //   //     chunks: 'all',
    //   //   }
    //   // }
    // },
    // runtimeChunk: "single"
  }
});