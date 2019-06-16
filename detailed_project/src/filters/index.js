import angular from 'angular';
// filters
import filterByObj from './filterByObj.js'


const filters = {filterByObj};
const filterModule = angular.module('app.filter',[]).filter(filters).name;

export default filterModule;