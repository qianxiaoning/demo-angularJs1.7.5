// 指令 有且只有一个根元素（感觉相当于vue的注册全局组件）
// restrict:'A||E||AE' A属性E元素AE既属性又元素
// replace希望外面那个div被替换掉，为true
import '@/components/head/head.less'
import head from '@/components/head/head.html'
appHead.$inject = ['$cookies'];

export default function appHead($cookies){
    return{
        restrict:'A',
        replace:true,
        template:head,
        link:function(scope){
            const userObj = $cookies.getObject('user');
            scope.name = (userObj&&userObj.name)||'';
        }
    }
}
