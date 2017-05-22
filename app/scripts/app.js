'use strict';

/**
 * @ngdoc overview
 * @name moviesApp
 * @description
 * # moviesApp
 *
 * Main module of the application.
 */
angular
  .module('moviesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {


    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/component/:slug', {
        templateUrl: 'views/componentdetails.html',
        controller: 'ComponentViewCtrl',
        controllerAs: 'componentdetails'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
