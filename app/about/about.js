'use strict';

angular.module('myApp.about', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('/about', {
    templateUrl: 'about/about.html',
    controller: 'aboutCtrl'
  });
}])

.controller('aboutCtrl', [function($scope) {

}]);