'use strict';

var exhibitionSoloModule = angular.module('myApp.exhibitions.solo', [
    'ui.router',
    'ngTouch',
    'angular-loading-bar',
    'ngAnimate',
    'ngResource']);

//resource
exhibitionSoloModule.factory('soloPiecesResource', ['$resource', function($resource) {
    return $resource('exhibitions/data/soloPieces.json', {}, {
        get: {method: 'GET', isArray: true}
    });
}]);


// controller
exhibitionSoloModule.controller('soloCtrl', [
        '$scope',
        '$state',
        'Lightbox',
        'soloPiecesResource',
        function($scope, $state, Lightbox, soloPiecesResource) {
            $scope.heading = 'Solo'
            $scope.Lightbox = Lightbox;
            $scope.images = soloPiecesResource.get();

            $scope.openLightboxModal = function(index) {
                Lightbox.openModal($scope.images, index, {
                    templateUrl: "core/lightbox/lightbox.html"
                });
            };
    }]);