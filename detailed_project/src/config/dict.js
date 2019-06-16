// dictFun

function dictFun(dict, $http) {
    $http.get('../data/city.json').then((res) => {
        dict.city = res.data;
    }).catch();
    $http.get('../data/salary.json').then((res) => {
        dict.salary = res.data;
    }).catch();
    $http.get('../data/scale.json').then((res) => {
        dict.scale = res.data;
    }).catch();
}
dictFun.$inject = ['dict', '$http'];
export default dictFun;
