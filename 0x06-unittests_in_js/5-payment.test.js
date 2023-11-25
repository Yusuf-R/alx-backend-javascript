/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
const sinon = require('sinon');
const { describe, it, beforeEach, afterEach } = require('mocha');
const { assert } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

const suiteName = 'sendPaymentRequestToApi';
let consoleLogSpy;

describe(suiteName, () => {
  const msg = 'Hooks: Verify console log prints correctly and it is called only once';
  const msg1 = 'Hooks: Set spy to recode console log operations for the function call';
  const msg2 = 'Hooks: Clear all logs afeter each test';
  // set up an before each test
  beforeEach(msg1, () => {
    consoleLogSpy = sinon.spy(console, 'log');
  });
  // set up an after each test
  afterEach(msg2, () => {
    consoleLogSpy.restore();
  });
  it(msg, () => {
    const res = sendPaymentRequestToApi(100, 20);
    assert.isTrue(consoleLogSpy.withArgs(`The total is: ${res}`).calledOnce);
    // verify that the console is logging the string The total is: 120
  });
  it(msg, () => {
    const res = sendPaymentRequestToApi(10, 10);
    assert.isTrue(consoleLogSpy.withArgs(`The total is: ${res}`).calledOnce);
  });
});
