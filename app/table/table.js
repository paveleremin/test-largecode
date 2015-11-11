'use strict';

(function(angular) {

    var Ctrl = function(CardPairs) {
        var ctrl = this;

        ctrl.cardPairs = CardPairs;
        ctrl.cardPairs.randomPairs();
    };

    // INIT MODULE
    var module = angular.module('app.Table', []);

    // INIT CONTROLLER
    module.controller('TableCtrl', Ctrl);

    // INIT ROUTE
    module.config(function($stateProvider) {
        $stateProvider.state('table', {
            url: '/',
            templateUrl: 'table/table.html',
            controller: Ctrl,
            controllerAs: 'ctrl'
        });
    });

})(angular);
