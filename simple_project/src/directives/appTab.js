import '@/components/tab/tab.less'
import tab from '@/components/tab/tab.html'
appTab.$inject = [];

export default function appTab(){
    return{
        restrict:'A',
        replace:true,
        template:tab,
        scope:{
            tabClick:'&',
            list:'='
        },
        link:function(scope){
            scope.click = function(tab){
                scope.selectId = tab.id;
                scope.tabClick(tab);
            };            
        }
    }
}
