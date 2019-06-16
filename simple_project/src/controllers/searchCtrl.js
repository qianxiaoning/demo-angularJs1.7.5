import '@/pages/search/search.less';
import angular from 'angular';

function searchCtrl(dict, $http, $state, $scope) {
    // 搜索组件 
    $scope.name = '';
    $scope.search = function () {
        $http.get('../data/positionList.json?name=' + $scope.name).then((res) => {
            $scope.positionList = res.data;
        }).catch();
    };
    $scope.search();
    // nav导航层组件
    $scope.sheet = {};
    $scope.tabList = [
        {
            id: 'city',
            name: '城市'
        }, {
            id: 'salary',
            name: '薪水'
        },
        {
            id: 'scale',
            name: '公司规模'
        }
    ];
    $scope.filterObj = {};
    var tabId = '';
    $scope.tClick = function (id, name) {
        // console.log(dict);
        tabId = id;
        $scope.sheet.list = dict[id];
        $scope.sheet.visible = true;
    };
    // 弹出层组件
    $scope.sClick = function (id, name) {
        console.log(id, name);
        if (id) {
            angular.forEach($scope.tabList, function (item) {
                if (item.id === tabId) {
                    item.name = name;
                }
            });
            $scope.filterObj[tabId + 'Id'] = id;
        } else {
            delete $scope.filterObj[tabId + 'Id'];
            angular.forEach($scope.tabList, function (item) {
                if (item.id === tabId) {
                    switch (item.id) {
                        case 'city':
                            item.name = '城市';
                            break;
                        case 'salary':
                            item.name = '薪水';
                            break;
                        case 'scale':
                            item.name = '公司规模';
                            break;
                        default:
                    }
                }
            });
        }
    };
}

searchCtrl.$inject = ['dict', '$http', '$state', '$scope'];
export default searchCtrl;