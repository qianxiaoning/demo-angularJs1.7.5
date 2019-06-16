import angular from 'angular';
// directives
import appHead from './appHead.js'
import appFoot from './appFoot.js'
import appPositionList from './appPositionList.js'

const directives = {appHead, appFoot, appPositionList};
// 'app.directive'后面的[]很重要，不能少，controller后同
// .directive()后也可通过对象注入多个指令
const directiveModule = angular.module('app.directive', []).directive(directives).name;

export default directiveModule;