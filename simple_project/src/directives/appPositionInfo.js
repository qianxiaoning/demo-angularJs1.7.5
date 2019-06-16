import positionInfo from '@/components/positionInfo/positionInfo.html'
appPositionInfo.$inject = ['$http'];

export default function appPositionInfo($http){
    return{
        restrict:'A',
        replace:true,
        template:positionInfo,
        scope:{
            isActive: '=',
            isLogin: '=',
            pos: '='
        },
        link: function(scope){
            scope.$watch('pos',function(newVal){
                if(newVal){
                    scope.pos.select = scope.pos.select || false;
                    scope.imgPath = scope.pos.select?'../../image/star-active.png' : '../../image/star.png';
                }
            });

            scope.favorite = function(){
                $http.get('../data/favorite.json',{params:{
                    id:scope.pos.id,
                    select:!scope.pos.select
                }}).then((res) => {
                    // console.log(res);
                    scope.pos.select = !scope.pos.select;
                    scope.imgPath = scope.pos.select?'../../image/star-active.png' : '../../image/star.png';
                }).catch();
            };
        }        
    }
}