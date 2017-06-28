'use strict';

var updatespModule = angular.module('myApp.updates', [
    'ui.router',
    'ngTouch',
    'angular-loading-bar',
    'ngAnimate',
    'ngResource']);

//resource
updatespModule.factory('updatesResource', ['$resource', function($resource) {
    return $resource('updates/data/updateData.json', {}, {
        get: {method: 'GET', isArray: true}
    });
}]);

//state
updatespModule.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('/updates', {
        url: '/updates',
        templateUrl: 'updates/updates.html',
        controller: 'updatesCtrl'
    });
}]);

//controller
updatespModule.controller('updatesCtrl', [
    '$scope',
    '$state',
    'updatesResource',
    function($scope, $state, updatesResource) {
        $scope.heading = 'Updates'
        $scope.updatesPage = this;
        $scope.updatesPage.posts = updatesResource.get();
        //$scope.updates = updatesResource.get();
        $scope.updatesPage.tab = 'updates';
        $scope.updatesPage.selectTab = function(setTab) {
            $scope.updatesPage.tab = setTab;
        };
        $scope.updatesPage.isSelected = function(checkTab){
            return $scope.updatesPage.tab === checkTab;
        };

    }]);