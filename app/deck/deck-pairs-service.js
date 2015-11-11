'use strict';

(function(angular) {

    function shuffle(arr) {
        var copy = arr.concat(),
            i = copy.length,
            randIndex;
        while (--i) {
            randIndex = Math.floor(i * Math.random());
            // swap values
            copy[i] = [copy[randIndex], copy[randIndex] = copy[i]][0];
        }

        return copy;
    }

    // INIT MODULE
    var module = angular.module('app.Deck');

    // INIT SERVICE
    module.factory('Pairs', function(Card, $timeout) {

        var CardPairs = function(numPairs) {
            this.cards = this.randomPairs(numPairs);
            this._isFinished = false;
        };

        CardPairs.prototype.availableIcons = function() {
            return [
                'star-o',
                'star',
                'circle-o',
                'circle',
                'minus-circle',
                'plus-circle',
                'question-circle',
                'info-circle',
                'times-circle',
                'times-circle-o'
            ];
        };

        CardPairs.prototype.randomPairs = function(numPairs) {
            var icons = this.availableIcons(),
                cards = [];

            while (cards.length < numPairs * 2) {
                var randIndex = Math.floor(icons.length * Math.random());
                cards.push(new Card(icons[randIndex]));
                cards.push(new Card(icons[randIndex]));
            }

            cards = shuffle(cards);

            return this.cards = cards;
        };

        CardPairs.prototype.alreadyFlipped = function() {
            return this.cards.filter(function(c) {
                return !c.locked && c.flipped;
            });
        };

        CardPairs.prototype.flipCard = function(card) {
            var alreadyFlipped = this.alreadyFlipped();
            if (alreadyFlipped.length > 1) {
                return;
            }

            var pair = alreadyFlipped[0];
            card.flip();

            if (pair) {
                if (pair.icon == card.icon) {
                    card.lock();
                    pair.lock();
                    this._isFinished = this.cards.filter(function(c) {
                        return !c.locked;
                    }).length === 0;
                    return;
                }
                $timeout(function() {
                    card.flip(false);
                    pair.flip(false);
                }, 500);
            }
        };

        CardPairs.prototype.isFinished = function() {
            return this._isFinished;
        };

        return CardPairs;

    });

})(angular);
