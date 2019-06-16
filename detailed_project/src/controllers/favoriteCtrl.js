import '@/pages/favorite/favorite.less';

function favoriteCtrl($http,$state,$scope) {
    $http.get('../data/myFavorite.json').then((res) => {
        // console.log(res);
        $scope.list = res.data;
    }).catch();
}

favoriteCtrl.$inject = ['$http','$state','$scope'];
export default favoriteCtrl;