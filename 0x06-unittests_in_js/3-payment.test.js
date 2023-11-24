const sinon = require('sinon');
const { describe, it } = require('mocha');
const { assert } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

const suiteName = 'sendPaymentRequestToApi';

describe(suiteName, () => {
  const msg = 'Validate usage of Utils function';
  const spy = sinon.spy(Utils, 'calculateNumber');
  it(msg, () => {
    const res = sendPaymentRequestToApi(100, 20);
    assert.strictEqual(res, 120);
    sinon.assert.calledOnce(spy);
    spy.calledWith('SUM', 100, 20);
  });
  it('Validate the sendPaymentRequestToApi value', () => {
    const res = sendPaymentRequestToApi(100, 120);
    assert.strictEqual(res, 220);
  });
  it('Validate the sendPaymentRequestToApi value', () => {
    const res = sendPaymentRequestToApi(0, 0);
    assert.strictEqual(res, 0);
  });
});
