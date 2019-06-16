// 公共css
import '@/common.less'

import angular from 'angular';
// router
import angularUiRouter from 'angular-ui-router';
import routerModule from '@/config/router.js';
// directive
import directiveModule from '@/directives/index.js';
// controller
import controllerModule from '@/controllers/index.js';
// angular-cookies ngCookies模块
import ngCookies from 'angular-cookies';
// service
import serviceModule from '@/services/index.js';
// filter
import filterModule from '@/filters/index.js';
// .value定义全局变量 .run执行dictFun函数
import dictFun from '@/config/dict.js';
// validatePlugin validation未做模块化暴露，只能'validation'导入
import validation from 'angular-validation';
import validatePlugin from '@/config/validation.js';
// angular-animate ng动画效果
import ngAnimate from 'angular-animate';


// 根据app.xxx名字模块注入
angular.module('app',[angularUiRouter, 'validation', directiveModule, controllerModule,ngCookies, serviceModule, filterModule, ngAnimate]).config(routerModule).config(validatePlugin).value('dict', {}).run(dictFun);
