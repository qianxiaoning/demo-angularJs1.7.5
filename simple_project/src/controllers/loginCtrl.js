import '@/pages/login/login.less';

function loginCtrl($http,$state,$scope,$cookies) {
    $scope.submit = function(){
        $http.get('../data/login.json').then((res) => {
            console.log(res);
            $cookies.putObject('user',res.data);
            $state.go('main');
        }).catch();
    };
}

loginCtrl.$inject = ['$http','$state','$scope','$cookies'];
export default loginCtrl;