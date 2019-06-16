import positionClass from '@/components/positionClass/positionClass.html'
appPositionClass.$inject = [];

export default function appPositionClass(){
    return{
        restrict:'A',
        replace:true,
        template:positionClass,
        scope:{
            com:'='
        },
        link: function(scope){
            scope.showPositionList = function(idx){
                console.log(scope);
                scope.positionList=scope.com.positionClass[idx].positionList;
                scope.isActive = idx
            }
            // 作用域提供了 ($watch) 方法监听数据模型的变化
            scope.$watch('com', function(newVal,oldValue,scope){
                console.log(newVal);
                console.log(oldValue);
                if(newVal) scope.showPositionList(0);                
            });
        }        
    }
}