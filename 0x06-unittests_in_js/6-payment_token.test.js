const { describe, it } = require('mocha');
const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('SuiteName: getPaymentTokenFromAPI', () => {
  it('Validate the getPaymentTokenFromAPI value', (done) => { // Add done as a parameter
    getPaymentTokenFromAPI(true)
      .then((res) => {
        assert.strictEqual(res.data, 'Successful response from the API');
        done(); // Invoke done when the asynchronous operation is complete
      })
      .catch((error) => {
        done(error); // Invoke done with an error if there's an issue
      });
  });
});
