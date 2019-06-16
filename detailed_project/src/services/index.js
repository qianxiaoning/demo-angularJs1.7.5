import angular from 'angular';
// services
import cacheService from './cache.js'


const services = {cacheService};

const serviceModule = angular.module('app.service',[]).service(services).name;

export default serviceModule;