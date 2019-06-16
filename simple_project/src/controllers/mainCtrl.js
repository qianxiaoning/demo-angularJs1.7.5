function mainCtrl($http,$scope) {
    $http.get('../data/positionList.json').then((res) => {
        // console.log(res);
        $scope.list = res.data;
    }).catch();
    $scope.alertFun = function(id,job){
        alert(job);
    };
}

mainCtrl.$inject = ['$http','$scope'];
export default mainCtrl;