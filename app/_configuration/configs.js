'use strict';

angular.module('app.configs', [])
    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    })
    .config(function(CardPairsProvider) {
        CardPairsProvider.numPairs = 6;
    })
;
