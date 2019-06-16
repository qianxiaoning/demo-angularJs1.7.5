### simple_project 精简项目
- 目录结构
```
src/
    components/ 组件
    config/
        router.js 路由表
        validation.js 'angular-validation'的config配置
    controllers/ 控制器
    data/ 数据mock文件
    directives/ 指令
    filters/ 过滤器
    image/ 图片
    pages/ 页面
    services/ 服务（公共方法）
    app.js 入口函数
    common.less 公共样式文件
    index.html html模板文件
```
- 一个父子组件数据流向的例子：（约定父页面的是$scope，组件内是scope，小scope）
```
父组件：pages/main.html
父控制器：controllers/mainCtrl.js
子组件：components/positionList.html
子指令：directives/appPositionList.js

1.main 中 调用了组件 positionList
<div app-position-list="" data='list'></div>

2.mainCtrl中$scope.list = res.data; list变量有了值

3.appPositionList指令暴露接口data去获取list的值
scope:{
    data: '='
}

4.positionList组件中 用data去循环li
<li ng-repeat='item in data'></li>

5.li绑定组件方法，传入item项数据
ng-click='subClickFun(item)'

6.在subClickFun方法中发起fatherClick回调方法
scope.subClickFun = function(item){
    scope.fatherClick(item);
};

7.组件中定义回调函数接口 fatherClick: '&'
scope:{
    data: '=',
    fatherClick: '&'
}

8.会触发main.html上 组件处的father-click自定义事件
<div app-position-list="" data='list' father-click='alertFun(id,job);'></div>

9.触发父页面上的alertFun方法

10.完成 父数据传子，子操作返回父
```