'use strict';

angular.module('myApp.home', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', [function($scope) {

}]);