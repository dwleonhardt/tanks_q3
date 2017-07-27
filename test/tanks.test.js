const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const TanksGame = require('../public/js/states/play.js').TanksGame;
const destroyTheWeak = require('../public/js/states/Boot.js').destroyTheWeak;

it ('Should be a function', function() {
    expect(destroyTheWeak).to.be.a('function','destroyTheWeak is not a function');
    assert.isFunction(destroyTheWeak, 'destroyTheWeak is not a function');
  });
