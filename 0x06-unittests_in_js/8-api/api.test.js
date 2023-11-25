// Create one suite for the index page:
// Correct status code?
// Correct result?

// Create one suite for the API:
const request = require('request');
const assert = require('assert');

const url = 'http://127.0.0.1:7865/';

describe('Index page', () => {
  it('Correct status code', (done) => {
    request.get(url, (error, response) => {
      assert.strictEqual(response.statusCode, 200);
      done();
    });
  });
  it('Correct result', (done) => {
    request.get(url, (error, response, body) => {
      assert.strictEqual(body, 'Welcome to the payment system');
      done();
    });
  });  
});
