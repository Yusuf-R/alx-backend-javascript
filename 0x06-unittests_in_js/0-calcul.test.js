// Create a file 0-calcul.test.js that contains test cases of this function
// You can assume a and b are always number
// Tests should be around the “rounded” part

const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
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
    const result = calculateNumber(-1, 2);
    assert.strictEqual(result, 1);
  });
})