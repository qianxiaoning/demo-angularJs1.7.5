import angular from 'angular';
// controllers
import companyCtrl from './companyCtrl.js'
import mainCtrl from './mainCtrl.js'
import positionCtrl from './positionCtrl.js'
import searchCtrl from './searchCtrl.js'
import favoriteCtrl from './favoriteCtrl.js'
import loginCtrl from './loginCtrl.js'
import meCtrl from './meCtrl.js'
import postCtrl from './postCtrl.js'
import registerCtrl from './registerCtrl.js'

const controllers = {companyCtrl, mainCtrl, positionCtrl,searchCtrl,favoriteCtrl,loginCtrl,meCtrl,postCtrl,registerCtrl};
// .controller()后也可通过对象注入多个控制器，同.directive()
const controllerModule = angular.module('app.controller',[]).controller(controllers).name;

export default controllerModule;