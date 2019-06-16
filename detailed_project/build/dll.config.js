const path = require('path');
const webpack = require('webpack');

module.exports={
    mode:'production',
    context: path.resolve(__dirname, '../'),
    entry:{
        libs:['angular', 'angular-ui-router', 'angular-animate', 'angular-cookies', 'angular-validation']
    },
    output:{
        path: path.resolve(__dirname, '../dll'),
        filename:'dll.[name].js',
        library:'[name]VarName_[hash:8]'
    },    
    plugins:[        
        new webpack.DllPlugin({
            name: "[name]VarName_[hash:8]",
            path: path.resolve(__dirname, '../dll/manifest.json'),
            context: path.resolve(__dirname, '..')
        })
    ]
}
