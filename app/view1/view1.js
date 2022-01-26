'use strict';

var view1 = angular.module('myApp.view1', ['ngRoute', 'ngMaterial'])

view1.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

view1.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.operators = ['>', '<', '===', '==!', '&&'];
    $scope.variables = ['tax', 'revenue', 'profit', 'cash'];

}]);