(function (angular) {
    'use strict';

    var mdsConditionBuilderRulesGroup = angular.module('mdsConditionBuilderRulesGroup.view1', ['ngRoute', 'ngMaterial']);

    mdsConditionBuilderRulesGroup.component('mdsConditionBuilderRulesGroup',  {

            replace: true,
            templateUrl: 'directives/mdsConditionBuilderRulesGroup/mdsConditionBuilderRulesGroup.html',
            bindings: {
                variables: '=',
                operators: '=',
                isDeleteToShow: '@',
                deleteGroup: '&',
                rule: '=',
            },
            controller: function () {
                var $ctrl = this;

                $ctrl.group = {
                    type: 'group',
                    rules: [
                        {
                            type: 'condition',
                            variable: '',
                            operator: '',
                            parameter: '',
                        },
                    ],
                }

                $ctrl.addCondition = () => {
                    $ctrl.group.rules.push({
                        type: 'condition',
                        variable: '',
                        operator: '',
                        parameter: '',
                    })
                }

                 $ctrl.deleteRule = (index) => {
                    $ctrl.group.rules.splice(index, 1);
                }

                $ctrl.addGroup = () => {
                    $ctrl.group.rules.push({
                        type: 'group',
                        rules: [],
                    })
                }

                $ctrl.printCondition = (index) => {
                    console.log($ctrl.group.rules[index])
                }

                $ctrl.addExpression = () => {
                    $ctrl.group.rules.push({
                        type: 'expression',
                        expression: '',
                    })
                }

            }

    })
})(angular);