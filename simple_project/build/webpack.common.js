const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
console.log('---------');
// 静态资源输出
const copyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

module.exports={
    context: path.resolve(__dirname, '../'),
    entry:{
        app:'./src/app.js'
    },    
    module:{
        rules:[
            {
                test:/\.html$/,
                use:['html-loader']
            },           
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name:devMode ? "[name].[ext]" : "static/images/[name].[hash:8].[ext]"                    
                }
            }            
        ]
    },
    resolve: {
        alias: {
            '@':path.resolve(__dirname,'../src')
        }
    },
    plugins:[             
        //复制静态文件
		new copyWebpackPlugin([
			{
                from: path.resolve(__dirname,"../src/data"),
                to: 'data'
            },
            {
                from: path.resolve(__dirname,"../src/image"),
                to: 'image'
			},         
        ]),
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname, '../dll'),
            manifest: path.resolve(__dirname, '../dll/manifest.json')
        })
    ],
    output:{
        publicPath: devMode ? '' : '/',
        filename: devMode ? '[name].js' : 'static/js/[name].[hash:8].js',
        path: path.resolve(__dirname, '../dist')
    }    
}
    
