'use strict';

var exhibitionGroupModule = angular.module('myApp.exhibitions.group', [
    'ui.router',
    'ngTouch',
    'angular-loading-bar',
    'ngAnimate',
    'ngResource']);

//resource
exhibitionGroupModule.factory('groupPiecesResource', ['$resource', function($resource) {
    return $resource('exhibitions/data/groupPieces.json', {}, {
        get: {method: 'GET', isArray: true}
    });
}]);

//controller
exhibitionGroupModule.controller('groupCtrl', [
    '$scope',
    '$state',
    'Lightbox',
    'groupPiecesResource',
    function($scope, $state, Lightbox, groupPiecesResource) {
        $scope.heading = 'Group'
        $scope.Lightbox = Lightbox;
        $scope.images = groupPiecesResource.get();

        $scope.openLightboxModal = function(index) {
            Lightbox.openModal($scope.images, index, {
                templateUrl: "core/lightbox/lightbox.html"
            });
        };
    }]);