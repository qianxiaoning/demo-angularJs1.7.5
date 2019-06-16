import '@/components/headBar/headBar.less'
import headBar from '@/components/headBar/headBar.html'
appHeadBar.$inject = [];

export default function appHeadBar(){
    return{
        restrict:'A',
        replace:true,
        template:headBar,
        scope:{
            title: '@'
        },
        link: function(scope){
            scope.back = function(){
                window.history.back();
            }
            // 接收事件
            scope.$on('abc',(event,data) => {
                console.log(event);
                console.log(data);
            });
            // 向上广播
            scope.$emit('cba',{name:'2'});
        }        
    }
}