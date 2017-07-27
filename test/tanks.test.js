const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const destroyTheWeak = require('../public/js/states/play.js').destroyTheWeak;

it ('Should be a function', function() {
    expect(destroyTheWeak).to.be.a('function','destroyTheWeak is not a function');
    assert.isFunction(destroyTheWeak, 'destroyTheWeak is not a function');
  });
