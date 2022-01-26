(function (angular) {
    'use strict';

    angular.module('myApp', [
        'ngRoute',
        'ngMaterial',
        'myApp.view1',
        'myApp.view2',
        'myApp.version',
        'mdsConditionBuilderCondition.view1',
        'mdsConditionBuilderRulesGroup.view1',
        'mdsConditionBuilderExpression.view1',
    ]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
})(angular);