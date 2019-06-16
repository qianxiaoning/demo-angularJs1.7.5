import '@/pages/post/post.less';

function postCtrl($http, $state, $scope) {
    $scope.tabList = [
        {
            id: 'all',
            name: '全部'
        }, {
            id: 'pass',
            name: '面试邀请'
        }, {
            id: 'fail',
            name: '不合适'
        }
    ];

    $http.get('../data/myPost.json').then((res) => {
        console.log(res);
        $scope.positionList = res.data;
    }).catch();
    $scope.filterObj = {};
    $scope.tClick = function (id, name) {
        switch (id) {
            case 'all':
                delete $scope.filterObj.state;
                break;
            case 'pass':
                $scope.filterObj.state = '1';
                break;
            case 'fail':
                $scope.filterObj.state = '-1';
                break;
            default:

        }
    }
}

postCtrl.$inject = ['$http', '$state', '$scope'];
export default postCtrl;