// 创建一个模块 app [声明模块依赖]
// 在index.html中的html标签上启动模块，ng-app='app'
// ui-router//ngjs路由

// 路由部分（根据页面定路由）
// 传参url:'/main/:id'或url:'/main/{id}'或url:'/main?before&after',
// 跳转<a ui-sref='main'></a>,<a ui-sref='main({id:12})'></a>
// $state.go('main',{id:12},{location:'replace'})
// 获取参数$state.params.id或$stateParams.id
import loginPage from '@/pages/login/login.html'
import main from '@/pages/main/main.html'

const routerModule = function($stateProvider,$urlRouterProvider){    
    $stateProvider.state({
        name:'login',
        url:'/login',
        template:loginPage,
        controller:'loginCtrl'
    }).state({
        name:'main',
        url:'/main',
        template:main,
        controller:'mainCtrl'
    });
    // 做一个默认的跳转
    $urlRouterProvider.otherwise('main')
};

export default routerModule;