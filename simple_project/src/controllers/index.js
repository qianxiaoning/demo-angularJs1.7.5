import angular from 'angular';
// controllers
import loginCtrl from './loginCtrl.js'
import mainCtrl from './mainCtrl.js'

const controllers = {loginCtrl, mainCtrl};
// .controller()后也可通过对象注入多个控制器，同.directive()
const controllerModule = angular.module('app.controller',[]).controller(controllers).name;

export default controllerModule;