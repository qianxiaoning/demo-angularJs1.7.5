import '@/pages/company/company.less';

function companyCtrl($http,$state,$scope) {
    $http.get('../data/company.json?id='+$state.params.id).then((res) => {
        $scope.company = res.data;
    }).catch();
    // 向下传播
    setTimeout(() => {
        $scope.$broadcast('abc',{id:1});
    },1000);    
    // 监听事件
    $scope.$on('cba',(event,data) => {
        console.log(data);
    });
}

companyCtrl.$inject = ['$http','$state','$scope'];
export default companyCtrl;