(function (angular) {
    'use strict';

    var mdsConditionBuilderExpression = angular.module('mdsConditionBuilderExpression.view1', ['ngRoute', 'ngMaterial']);


    mdsConditionBuilderExpression.component('mdsConditionBuilderExpression', {

        replace: true,
        templateUrl: 'directives/mdsConditionBuilderExpression/mdsConditionBuilderExpression.html',
        bindings: {
            rule: '=',
            deleteExpression: '&',
            printExpression: '&',
        },

        controller: function () {
            var $ctrl = this;

            $ctrl.expression = {
                type: 'expression',
                expression: $ctrl.expression,
            };
        }

    });
})(angular)