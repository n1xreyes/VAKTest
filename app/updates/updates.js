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
        $scope.maxResultsToDisplay = 5;

        //$scope.updatesPage.posts = updatesResource.get();
        //$scope.updates = updatesResource.get();

        //Get data and paging info
        var deferred = updatesResource.get().$promise;
        deferred.then(function successCallback(data) {
            $scope.updatesPage.posts = data;
            $scope.totalItems = data.length;
        });
        $scope.currentPage = 1;
        $scope.maxSize = 5;
        $scope.itemsPerPage = 5;


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