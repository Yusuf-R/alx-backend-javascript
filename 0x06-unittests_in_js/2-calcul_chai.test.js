// Create a file 0-calcul.test.js that contains test cases of this function
// You can assume a and b are always number
// Tests should be around the “rounded” part

const { expect } = require('chai'); // using chai asertion library
const { describe, it } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe('SuiteName: calculateNumber', () => {
  describe('TestSuite for type: SUM', () => {
    const msg = 'it should return the rounded sum of a and b';
    const fType = 'SUM';
    it(msg, () => {
      const result = calculateNumber(fType, -1, -2);
      expect(result).to.equal(-3);
    });
    it(msg, () => {
      const result = calculateNumber(fType, -1, 6.2);
      expect(result).to.equal(5);
    });
    it(msg, () => {
      expect(calculateNumber(fType, 1.5, 2.98)).to.equal(5);
    });
    it(msg, () => {
      const result = calculateNumber(fType, 7, -20);
      expect(result).to.equal(-13);
    });
    it(msg, () => {
      const result = calculateNumber(fType, 0, 0);
      expect(result).to.equal(0);
    });
    it(msg, () => {
      const result = calculateNumber(fType, 14.4, 6.4);
      expect(result).to.equal(20);
    });
    it(msg, () => {
      const result = calculateNumber(fType, -4.5, -5.7);
      expect(result).to.equal(-10);
    });
  });
  describe('TestSuite for type: SUBTRACT', () => {
    const msg = 'it should return the rounded difference of a and b';
    const fType = 'SUBTRACT';
    it(msg, () => {
      const result = calculateNumber(fType, -1, -2);
      expect(result).to.equal(1);
    });
    it(msg, () => {
      const result = calculateNumber(fType, -1, 6.2);
      expect(result).to.equal(-7);
    });
    it(msg, () => {
      expect(calculateNumber(fType, 1.5, 2.98)).to.equal(-1);
    });
    it(msg, () => {
      const result = calculateNumber(fType, 7, -20);
      expect(result).to.equal(27);
    });
    it(msg, () => {
      const result = calculateNumber(fType, 0, 0);
      expect(result).to.equal(0);
    });
    it(msg, () => {
      const result = calculateNumber(fType, 14.4, 6.4);
      expect(result).to.equal(8);
    });
    it(msg, () => {
      const result = calculateNumber(fType, -4.5, -5.7);
      expect(result).to.equal(2);
    });
  });

  describe('TestSuite for type: DIVIDE', () => {
    const msg = 'it should return the rounded division of a and b';
    const fType = 'DIVIDE';
    it(msg, () => {
      const result = calculateNumber(fType, -1, -2);
      expect(result).to.equal(0.5);
    });
    it(msg, () => {
      const result = calculateNumber(fType, -18, 6.2);
      expect(result).to.equal(-3);
    });
    it(msg, () => {
      expect(calculateNumber(fType, 15, 2.98)).to.equal(5);
    });
    it(msg, () => {
      const result = calculateNumber(fType, 27, -3);
      expect(result).to.equal(-9);
    });
    it('it should return an error', () => {
      const result = calculateNumber(fType, 0, 0);
      expect(result).to.equal('Error');
    });
    it(msg, () => {
      const result = calculateNumber(fType, 14.4, 7.4);
      expect(result).to.equal(2);
    });
    it(msg, () => {
      const result = calculateNumber(fType, -25.5, -5.1);
      expect(result).to.equal(5);
    });
  });
});
