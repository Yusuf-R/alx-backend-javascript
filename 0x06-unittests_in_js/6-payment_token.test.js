const { describe, it } = require('mocha');
const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('SuiteName: getPaymentTokenFromAPI', () => {
  it('Validate the getPaymentTokenFromAPI value', async () => {
    try {
      const res = await getPaymentTokenFromAPI(true);
      assert.strictEqual(res.data, 'Successful response from the API');
    } catch (err) {
      return err;
    }
  });
});
