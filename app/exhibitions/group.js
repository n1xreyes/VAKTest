'use strict';

var exhibitionGroupModule = angular.module('myApp.exhibitions.group', ['ui.router', 'ngResource']);

//resource
exhibitionGroupModule.factory('groupPiecesResource', ['$resource', function($resource) {
    return $resource('exhibitions/data/soloPieces.json', {}, {
        query: {method: 'GET', isArray: true}
    });
}]);


//state
exhibitionGroupModule.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('group', {
        url: '/group',
        templateUrl: 'exhibitions/group.html',
        controller: 'groupCtrl',
        resolve: {
            groupPiecesResource: 'groupPiecesResource'
        }
    });
}]);

//controller
exhibitionGroupModule.controller('groupCtrl', [
    '$scope',
    '$state',
    'groupPiecesResource',
    function($scope, $state, groupPiecesResource) {
        $scope.heading = 'group'
        $scope.groupPieces = groupPiecesResource.query();
    }]);