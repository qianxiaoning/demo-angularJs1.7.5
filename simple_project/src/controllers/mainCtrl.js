function mainCtrl($http,$scope) {
    $http.get('../data/positionList.json').then((res) => {
        // console.log(res);
        $scope.list = res.data;
    }).catch();
}

mainCtrl.$inject = ['$http','$scope'];
export default mainCtrl;