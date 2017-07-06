'use strict';

var homeModule = angular.module('myApp.home', ['ui.router']);

//resource
homeModule.factory('homeResource', ['$resource', function($resource) {
    return $resource('home/data/homeData.json', {}, {
        get: {method: 'GET', isArray: true}
    });
}]);

//controller
homeModule.controller('homeCtrl',
    [   '$scope',
        'homeResource',
        function($scope, homeResource) {

            $scope.myInterval = 5000;
            $scope.carouselTimer = 5000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            //$scope.slides = [];
            //Get data and paging info
            var deferred = homeResource.get().$promise;
            deferred.then(function successCallback(data) {
                $scope.slides = data;
                //$scope.slides = data;
            }, function(err) {
                console.log(err);
            });

            var slides = [];
            angular.forEach($scope.slides, function(value, key) {
                console.log(this);
                this.push(key + ': ' + value);
            }, slides);
            var currIndex = 0;
}]);