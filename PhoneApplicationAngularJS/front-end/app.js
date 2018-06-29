"use strict";

import CatalogueController from './controllers/CatalogueController';
import PhoneController from './controllers/PhoneController';
import CartController from './controllers/CartController';
import SearchSortController from './controllers/SearchSortController';

import PhoneService from './services/PhoneService';
import CartService from './services/CartService';
import CatalogueService from './services/CatalogueService';

const appName = 'PhoneApplication';
const appController = `${appName}.controllers`;
const appServices = `${appName}.services`;

angular.module(appController, []);
angular.module(appServices, []);

angular.module(appServices).service('CartService', ['$cookies' , CartService]);
angular.module(appServices).service('CatalogueService', CatalogueService);
angular.module(appServices).service('PhoneService', ['$http' , PhoneService]);

angular.module(appController).controller('CartController',  ['$scope', 'CartService', CartController]);
angular.module(appController).controller('SearchSortController',  ['$scope', 'CatalogueService', 'PhoneService', SearchSortController]);

angular.module(appController).directive('shoppingCart', () => { return { templateUrl : '../front-end/templates/shopping-cart.html' } });
angular.module(appController).directive('searthSort', () => { return { templateUrl : '../front-end/templates/search-sort.html' } });

const app = angular.module(appName, [
    'ngRoute',
    'ngCookies',
    appController,
    appServices
]);

app.config( [ '$routeProvider' , '$locationProvider'  , ($routeProvider , $locationProvider)=>{

    $locationProvider.html5Mode(true);

    $routeProvider.when('/' , {

        templateUrl: '../front-end/templates/catalogue.html',
        controller: [ '$scope', 'CatalogueService', 'PhoneService', CatalogueController]

    });

    $routeProvider.when('/single-phone/:phoneID' , {

        templateUrl: '../front-end/templates/single-phone.html',
        controller: [ '$scope', '$routeParams', 'CartService', 'PhoneService', PhoneController]

    });


} ] );

app.run();