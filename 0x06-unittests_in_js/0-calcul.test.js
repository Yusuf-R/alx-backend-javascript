// Create a file 0-calcul.test.js that contains test cases of this function
// You can assume a and b are always number
// Tests should be around the “rounded” part

const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('SuiteName: calculateNumber', () => {
  const msg = 'it should return the rounded sum of a and b';
  it(msg, () => {
    const result = calculateNumber(-1, -2);
    assert.strictEqual(result, -3);
  });
  it(msg, () => {
    const result = calculateNumber(-1, 6.2);
    assert.strictEqual(result, 5);
  });
  it(msg, () => {
    assert.strictEqual(calculateNumber(1.5, 2.98), 5);
  });
  it(msg, () => {
    const result = calculateNumber(7, -20);
    assert.strictEqual(result, -13);
  });
  it(msg, () => {
    const result = calculateNumber(0, 0);
    assert.strictEqual(result, 0);
  });
  it(msg, () => {
    const result = calculateNumber(14.4, 6.4);
    assert.strictEqual(result, 20);
  });
  it(msg, () => {
    const result = calculateNumber(-4.5, -5.7);
    assert.strictEqual(result, -10);
  });
});
