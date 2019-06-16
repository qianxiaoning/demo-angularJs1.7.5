import '@/pages/register/register.less';

function registerCtrl($http, $state, $scope, $interval) {
    $scope.submit = function () {
        console.log($scope.user);
        $http.get('../data/regist.json', { params: $scope.user }).then((res) => {
            console.log(res);
            $state.go('login');
        }).catch();
    };
    let count = 60;
    $scope.send = function () {
        $http.get('../data/code.json').then((res) => {
            if (res.data.state === 1) {
                count = 60;
                $scope.time = '60s';
                const interval = $interval(() => {
                    if (count <= 0) {
                        $interval.cancel(interval);
                        $scope.time = '';
                        return;
                    } else {
                        count--;
                        $scope.time = count + 's';
                    }
                }, 1000);
            }
        }).catch();
    };
}

registerCtrl.$inject = ['$http', '$state', '$scope', '$interval'];
export default registerCtrl;
