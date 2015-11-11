'use strict';

(function(angular) {

    // INIT MODULE
    var module = angular.module('app.Deck');

    // INIT SERVICE
    module.factory('Card', function() {

        var id = 0;

        var Card = function(icon) {
            this.id = ++id;
            this.icon = 'fa-' + icon;
            this.flipped = false;
            this.locked = false;
        };

        Card.prototype.flip = function(state) {
            !angular.isUndefined(state) || (state = !this.flipped);
            this.flipped = state;
        };

        Card.prototype.lock = function() {
            this.locked = true;
        };

        return Card;
    });

})(angular);
