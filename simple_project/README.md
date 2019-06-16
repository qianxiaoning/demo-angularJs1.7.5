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
1.page通过page的controller请求到$scope.data
2.组件通过设定
scope:{
    list:'='
}
在pages上组件调用处，list接口去取data
<xxx list='data'/>
3.组件中用list变量循环，点击li调用组件的myClick方法，传入item。
    组件中只能用：
    1.scope定义的接口取自父页面的数据 如：list
    2.自己定义在小scope上的变量 如：selectId
<li class='{{selectId===item.id?"on":""}}' ng-repeat='item in list' ng-bind='item.name' ng-click='myClick(item);'></li>
4.在组件中link函数里定义组件上的myClick方法，改变小scope对象
link:function(scope){
    scope.myClick = function(item){
        scope.selectId = item.id; // 用传入的item改变selectId的值
        scope.fatherClick(item); // 触发父页面组件上的回调方法，传入item
    }
}
scope:{
    tabClick:'&' // 定义父页面组件上的回调方法
}
5.父页面组件上：
<xxx list='data' father-click='xxxClick(id,name)'/> //通过组件的回调函数接口触发父页面$scope上的xxxClick方法，参数(id,name)为组件里传入的item上的属性
6.父页面controller上xxxClick被触发
$scope.anotherName = '';
$scope.xxxClick = function(id,name){
    // 来改变$scope上的另一个变量anotherName，进而影响父页面上的其他组件，完成组件间交互
    $scope.anotherName = name;
}
```