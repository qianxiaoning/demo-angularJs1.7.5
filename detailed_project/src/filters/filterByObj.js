import angular from 'angular';

export default function filterByObj() {
    return function (list, obj) {// list为|前数组，obj为:后的对象
        const result = [];
        angular.forEach(list, function (item) {
            let isEqual = true;
            for (let e in obj) {
                if (item[e] !== obj[e]) {
                    isEqual = false;
                }
            }
            if (isEqual) {
                result.push(item);
            }
        });
        return result;
    };
}

