function cacheService($cookies) {
    this.put = function (key, value) {
        $cookies.put(key, value);
    };
    this.get = function (key) {
        return $cookies.get(key);
    };
    this.remove = function (key) {
        $cookies.remove(key);
    };
}
// 把ngCookies模块下的$cookies服务又封装了一遍，其实可以直接用$cookies
cacheService.$inject = ['$cookies'];
export default cacheService;