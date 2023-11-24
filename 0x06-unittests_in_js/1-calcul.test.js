// Create a file 0-calcul.test.js that contains test cases of this function
// You can assume a and b are always number
// Tests should be around the “rounded” part

const assert = require('assert'); // using node asertion library
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('SuiteName: calculateNumber', () => {
  describe('TestSuite for type: SUM', () => {
    const msg = 'it should return the rounded sum of a and b';
    const fType = 'SUM';
    it(msg, () => {
      const result = calculateNumber(fType, -1, -2);
      assert.strictEqual(result, -3);
    });
    it(msg, () => {
      const result = calculateNumber(fType, -1, 6.2);
      assert.strictEqual(result, 5);
    });
    it(msg, () => {
      assert.strictEqual(calculateNumber(fType, 1.5, 2.98), 5);
    });
    it(msg, () => {
      const result = calculateNumber(fType, 7, -20);
      assert.strictEqual(result, -13);
    });
    it(msg, () => {
      const result = calculateNumber(fType, 0, 0);
      assert.strictEqual(result, 0);
    });
    it(msg, () => {
      const result = calculateNumber(fType, 14.4, 6.4);
      assert.strictEqual(result, 20);
    });
    it(msg, () => {
      const result = calculateNumber(fType, -4.5, -5.7);
      assert.strictEqual(result, -10);
    });
  });
  describe('TestSuite for type: SUBTRACT', () => {
    const msg = 'it should return the rounded difference of a and b';
    const fType = 'SUBTRACT';
    it(msg, () => {
      const result = calculateNumber(fType, -1, -2);
      assert.strictEqual(result, 1);
    });
    it(msg, () => {
      const result = calculateNumber(fType, -1, 6.2);
      assert.strictEqual(result, -7);
    });
    it(msg, () => {
      assert.strictEqual(calculateNumber(fType, 1.5, 2.98), -1);
    });
    it(msg, () => {
      const result = calculateNumber(fType, 7, -20);
      assert.strictEqual(result, 27);
    });
    it(msg, () => {
      const result = calculateNumber(fType, 0, 0);
      assert.strictEqual(result, 0);
    });
    it(msg, () => {
      const result = calculateNumber(fType, 14.4, 6.4);
      assert.strictEqual(result, 8);
    });
    it(msg, () => {
      const result = calculateNumber(fType, -4.5, -5.7);
      assert.strictEqual(result, 2);
    });
  });

  describe('TestSuite for type: DIVIDE', () => {
    const msg = 'it should return the rounded division of a and b';
    const fType = 'DIVIDE';
    it(msg, () => {
      const result = calculateNumber(fType, -1, -2);
      assert.strictEqual(result, 0.5);
    });
    it(msg, () => {
      const result = calculateNumber(fType, -18, 6.2);
      assert.strictEqual(result, -3);
    });
    it(msg, () => {
      assert.strictEqual(calculateNumber(fType, 15, 2.98), 5);
    });
    it(msg, () => {
      const result = calculateNumber(fType, 27, -3);
      assert.strictEqual(result, -9);
    });
    it(msg, () => {
      const result = calculateNumber(fType, 0, 0);
      assert.strictEqual(result, 'Error');
    });
    it(msg, () => {
      const result = calculateNumber(fType, 14.4, 7.4);
      assert.strictEqual(result, 2);
    });
    it(msg, () => {
      const result = calculateNumber(fType, -25.5, -5.1);
      assert.strictEqual(result, 5);
    });
  });
});
