// 创建一个模块 app [声明模块依赖]
// 在index.html中的html标签上启动模块，ng-app='app'
// ui-router//ngjs路由

// 路由部分（根据页面定路由）
// 传参url:'/main/:id'或url:'/main/{id}'或url:'/main?before&after',
// 跳转<a ui-sref='main'></a>,<a ui-sref='main({id:12})'></a>
// $state.go('main',{id:12},{location:'replace'})
// 获取参数$state.params.id或$stateParams.id
import main from '@/pages/main/main.html'
import position from '@/pages/position/position.html'
import companyPage from '@/pages/company/company.html'
import searchPage from '@/pages/search/search.html'
import favoritePage from '@/pages/favorite/favorite.html'
import loginPage from '@/pages/login/login.html'
import mePage from '@/pages/me/me.html'
import postPage from '@/pages/post/post.html'
import registerPage from '@/pages/register/register.html'

const routerModule = function($stateProvider,$urlRouterProvider){    
    $stateProvider.state({
        name:'main',
        url:'/main',
        template:main,
        controller:'mainCtrl'
    }).state({
        name:'position',
        url:'/position/:id',
        template:position,
        controller:'positionCtrl'
    }).state({
        name:'company',
        url:'/company/:id',
        template:companyPage,
        controller:'companyCtrl'
    }).state({
        name:'search',
        url:'/search',
        template:searchPage,
        controller:'searchCtrl'
    }).state({
        name:'favorite',
        url:'/favorite',
        template:favoritePage,
        controller:'favoriteCtrl'
    }).state({
        name:'login',
        url:'/login',
        template:loginPage,
        controller:'loginCtrl'
    }).state({
        name:'me',
        url:'/me',
        template:mePage,
        controller:'meCtrl'
    }).state({
        name:'post',
        url:'/post',
        template:postPage,
        controller:'postCtrl'
    }).state({
        name:'register',
        url:'/register',
        template:registerPage,
        controller:'registerCtrl'
    });
    // 做一个默认的跳转
    $urlRouterProvider.otherwise('main')
};

export default routerModule;