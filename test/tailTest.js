const tail = require('../tail');
const assert = require('chai').assert;


const result = tail(["Hello", "Lighthouse", "Labs"]);

describe('#tail', () => {
  it('test results are equal to test assertions', () => {
    assert.strictEqual(result.length, 2)
  });
});

describe('#tail', () => {
  it('returns first element of new array (ensures array has been modified)', () => {
    assert.strictEqual(result[0], "Lighthouse");
  });
});

describe('#tail', () => {
  it('returns second element of new array (ensures array has been modified)', () => {
    assert.strictEqual(result[1], "Labs");
  });
});