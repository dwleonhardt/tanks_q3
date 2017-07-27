const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const Play = require('../public/js/states/play.js');

var game = new Play();

it ('Should be a function', function() {
    expect(game.destroyTheWeak).to.be.a('function','destroyTheWeak is not a function');
    assert.isFunction(game.destroyTheWeak, 'destroyTheWeak is not a function');
  });
