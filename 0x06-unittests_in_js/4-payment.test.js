const sinon = require('sinon');
const { describe, it, afterEach } = require('mocha');
const { assert } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

const suiteName = 'sendPaymentRequestToApi';

describe(suiteName, () => {
  const msg = 'stubs: ByePass usage of Utils function';
  const stub = sinon.stub(Utils, 'calculateNumber');
  stub.withArgs('SUM', 100, 20).returns(10);
  // set up an after each test
  afterEach(() => {
    stub.reset();
    stub.restore();
  });
  it(msg, () => {
    const res = sendPaymentRequestToApi(100, 20);
    assert.strictEqual(res, 10);
    sinon.assert.calledOnce(stub);
  });
  it('Restore the normal functional value', () => {
    const res = sendPaymentRequestToApi(100, 20);
    assert.strictEqual(res, 120);
  });
});
