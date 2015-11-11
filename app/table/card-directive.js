'use strict';

(function(angular) {

    // INIT MODULE
    var module = angular.module('app.Table');

    // INIT SERVICE
    module.directive('card', function() {
        return {
            replace: true,
            templateUrl: 'table/card.html',
            scope: {
                pairs: '=',
                card: '='
            },
            link: function(scope, element) {
                element.on('click', function() {
                    scope.pairs.flipCard(scope.card);
                    scope.$apply();
                });

                var handler = scope.$watch('card.locked', function(n) {
                    if (!n) return;
                    element.off('click');
                    handler();
                });
            }
        };
    });

})(angular);
