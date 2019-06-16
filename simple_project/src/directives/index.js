import angular from 'angular';
// directives
import appCompany from './appCompany.js'
import appFoot from './appFoot.js'
import appHead from './appHead.js'
import appHeadBar from './appHeadBar.js'
import appPositionClass from './appPositionClass.js'
import appPositionInfo from './appPositionInfo.js'
import appPositionList from './appPositionList.js'
import appTab from './appTab.js'
import appSheet from './appSheet.js'

const directives = {appCompany, appFoot, appHead, appHeadBar, appPositionClass, appPositionInfo, appPositionList,appTab,appSheet};
// 'app.directive'后面的[]很重要，不能少，controller后同
// .directive()后也可通过对象注入多个指令
const directiveModule = angular.module('app.directive', []).directive(directives).name;

export default directiveModule;