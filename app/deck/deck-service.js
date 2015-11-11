'use strict';

(function(angular) {

    // INIT MODULE
    var module = angular.module('app.Deck', []);

    // INIT PROVIDER
    module.provider('CardPairs', function() {
        this.$get = function(Pairs) {
            return new Pairs(this.numPairs);
        };
    });

})(angular);
