'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ui.bootstrap',
  'ngTouch',
  'angular-loading-bar',
  'bootstrapLightbox',
  'ngAnimate',
  'ngResource',
  'myApp.home',
  'myApp.about',
  'myApp.exhibitions.solo',
  'myApp.exhibitions.group',
  'myApp.version',
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit
            url: '/about',
            templateUrl: 'about/about.html'
        })
        // EXHIBITION PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('exhibitions', {
            // we'll get to this in a bit
            url: '/exhibitions',
            templateUrl: 'exhibitions/partial-exhibitions.html'
        })
        .state('exhibitions.solo', {
            // we'll get to this in a bit
            url: '/solo',
            templateUrl: 'exhibitions/solo.html',
            controller: 'soloCtrl'
        })
        .state('exhibitions.group', {
            // we'll get to this in a bit
            url: '/group',
            templateUrl: 'exhibitions/group.html',
            controller: 'groupCtrl'
        });
}]);
