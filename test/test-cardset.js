var vows   = require('vows'),
    should = require('should'),
    assert = require('assert');

var Card    = require('../lib/card'),
    CardSet = require('../lib/cardset');

vows.describe('CardSet').addBatch({
	'Construction': {
		'Single card': function() {
			var cardset = new CardSet(Card('2s'));

			assert.deepEqual(cardset.cards, [Card('2s')]);
		},
		'Multiple cards': function() {
			var cardset = new CardSet(Card('2s'), Card('3s'), Card('4s'));

			assert.deepEqual(cardset.cards, [Card('2s'), Card('3s'), Card('4s')]);
		},
		'Array of cards': function() {
			var cardset = new CardSet([Card('2s'), Card('3s'), Card('4s')]);

			assert.deepEqual(cardset.cards, [Card('2s'), Card('3s'), Card('4s')]);
		},
		'Parsed list of cards': function() {
			var cardset = new CardSet('2s', '3s', '4s');

			assert.deepEqual(cardset.cards, [Card('2s'), Card('3s'), Card('4s')]);
		},
	},

	'Parsing': {
		'Single card': function() {
			assert.deepEqual(CardSet.parse('2c').cards, [Card('2c')]);
		},
		'Multiple cards': function() {
			assert.deepEqual(CardSet.parse('2c 3s').cards, [Card('2c'), Card('3s')]);
		},
	},

	'Stringify': {
		'Single card': function() {
			assert.equal(CardSet.parse('5h').toString(), '5h');
		},
		'Multiple cards': function() {
			assert.equal(CardSet.parse('Ad 6h').toString(), 'Ad 6h');
		},
	},
}).run();
