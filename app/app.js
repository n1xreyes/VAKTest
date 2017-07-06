'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ui.bootstrap',
  'ngTouch',
  'angular-loading-bar',
  'bootstrapLightbox',
  'angularGrid',
  'ngAnimate',
  'ngResource',
  'myApp.home',
  'myApp.updates',
  'myApp.about',
  'myApp.exhibitions.solo',
  'myApp.exhibitions.group',
  'myApp.version'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: 'homeCtrl'
        })

        //Updates and multiple nested views
        .state('updates', {
            url: '/updates',
            templateUrl: 'updates/updates.html',
            controller: 'updatesCtrl'
        })

        // ABOUT PAGE =================================
        .state('about', {
            url: '/about',
            templateUrl: 'about/about.html'
        })
        // EXHIBITION PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('exhibitions', {
            url: '/exhibitions',
            templateUrl: 'exhibitions/partial-exhibitions.html'
        })
        .state('exhibitions.solo', {
            url: '/solo',
            templateUrl: 'exhibitions/solo.html',
            controller: 'soloCtrl'
        })
        .state('exhibitions.group', {
            url: '/group',
            templateUrl: 'exhibitions/group.html',
            controller: 'groupCtrl'
        });

}]);
