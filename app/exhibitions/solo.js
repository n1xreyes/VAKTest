'use strict';

var exhibitionSoloModule = angular.module('myApp.exhibitions.solo', ['ui.router', 'ngResource']);

//resource
exhibitionSoloModule.factory('soloPiecesResource', ['$resource', function($resource) {
    return $resource('exhibitions/data/soloPieces.json', {}, {
        query: {method: 'GET', isArray: true}
    });
}]);


// state
exhibitionSoloModule.config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('solo', {
            url: '/solo',
            templateUrl: 'exhibitions/solo.html',
            controller: 'soloCtrl',
            resolve: {
                soloPiecesResource: 'soloPiecesResource'
            }
        });
    }]);

// controller
exhibitionSoloModule.controller('soloCtrl', [
        '$scope',
        '$state',
        'soloPiecesResource',
        function($scope, $state, soloPiecesResource) {
            $scope.heading = 'solo'
            $scope.soloPieces = soloPiecesResource.query();
    }]);