import '@/components/positionList/positionList.less'
import positionList from '@/components/positionList/positionList.html'
// name.$inject = [];注入依赖
appPositionList.$inject = ['$http'];

export default function appPositionList($http){
    return{
        restrict:'A',
        replace:true,
        template:positionList,
        scope:{
            data: '=',// 表示指令和页面的控制器是同一个scope，暴露一个data的接口
            filterObj:'=',
            isFavorite:'='
        },
        link:function(scope){
            scope.select = function(item){
                $http.get('../data/favorite.json',{params:{
                    id:item.id,
                    select:!item.select
                }}).then((res) => {
                    // console.log(res);
                    item.select = !item.select;
                }).catch();                
            }
        }
    }
}