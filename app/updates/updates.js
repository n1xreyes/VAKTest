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

//controller
updatespModule.controller('updatesCtrl', [
    '$scope',
    '$state',
    'Lightbox',
    'updatesResource',
    function($scope, $state, Lightbox, updatesResource) {
        $scope.heading = 'Updates'
        $scope.updatesPage = this;
        $scope.Lightbox = Lightbox;

        $scope.updatesPage.posts = updatesResource.get();
        //$scope.updates = updatesResource.get();
        $scope.updatesPage.tab = 'updates';
        $scope.updatesPage.selectTab = function(setTab) {
            $scope.updatesPage.tab = setTab;
        };
        $scope.updatesPage.isSelected = function(checkTab){
            return $scope.updatesPage.tab === checkTab;
        };

        $scope.openLightboxModal = function(images,index) {
            Lightbox.openModal(images, index, {
                templateUrl: "core/lightbox/lightbox.html"
            });
        };

    }]);