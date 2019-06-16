import '@/pages/position/position.less';

function positionCtrl($q,$http,$state,$scope,$cookies,$log) {
    // $q是promise服务
    const userObj = $cookies.getObject('user');
    $scope.isLogin = !!userObj.name;
    $scope.message = $scope.isLogin?'投个简历':'去登录';
    function getPosition(){
        var def = $q.defer();
        $http.get('../data/position.json?id='+$state.params.id).then((res) => {
            // console.log(res);
            $scope.position = res.data;
            if(res.data.posted){
                $scope.message = '已投递';
            }else{

            }
            def.resolve(res.data);
        }).catch((err) => {
            def.reject(err);
        });
        return def.promise;
    }
    function getCompany(id){
        $http.get('../data/company.json?id='+id).then((res) => {
            console.log(res);
            $scope.company = res.data;
        }).catch();
    }
    getPosition().then((res) => {
        console.log(res);
        getCompany(res.companyId);
    },(rej) => {

    });
    // 投个简历
    $scope.go = function(){
        if($scope.message !== '已投递'){
            if($scope.isLogin){
                $http.get('../data/handle.json?id='+$scope.position.id).then((res) => {
                    // console.log(res.data);
                    $log.info(res.data);
                    $scope.message = '已投递';
                }).catch();
            }else{
                $state.go('login');
            }
        }        
    };
}
// funName.$inject = [];注入依赖
// cacheService服务名
positionCtrl.$inject = ['$q','$http','$state','$scope', '$cookies','$log'];
export default positionCtrl;