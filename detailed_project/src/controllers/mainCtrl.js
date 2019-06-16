// controller部分（一个页面一个controller）
// 每个controller必须申明$scope这个服务
// import company1 from '@/image/company-1.png';
// import company2 from '@/image/company-2.png';
// import company3 from '@/image/company-3.png';

function mainCtrl($http,$scope) {
    $http.get('../data/positionList.json').then((res) => {
        // console.log(res);
        $scope.list = res.data;
    }).catch();

    $scope.a=123;    
    // $scope.list1 = [
    //     {
    //         img:company1,
    //         p:'1',
    //         id:'1'
    //     },
    //     {
    //         img:company2,
    //         p:'2',
    //         id:'2'
    //     },
    //     {
    //         img:company3,
    //         p:'3',
    //         id:'3'
    //     }
    // ];
    // $scope.list2 = [
    //     {
    //         img:company1,
    //         p:'4',
    //         id:'4'
    //     },
    //     {
    //         img:company2,
    //         p:'5',
    //         id:'5'
    //     },
    //     {
    //         img:company3,
    //         p:'6',
    //         id:'6'
    //     }
    // ];
}

mainCtrl.$inject = ['$http','$scope'];
export default mainCtrl;