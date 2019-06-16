import '@/pages/me/me.less';

function meCtrl($http,$state,$scope,$cookies) {
    const userObj = $cookies.getObject('user');
    if(userObj){
        $scope.name = userObj.name;
        $scope.image = '../../'+userObj.image;
    }
    $scope.logout = function(){
        $cookies.remove('user');
        $state.go('main');
    };    
}

meCtrl.$inject = ['$http','$state','$scope','$cookies'];
export default meCtrl;