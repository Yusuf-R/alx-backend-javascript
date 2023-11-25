/* eslint-disable no-undef */
// Create one suite for the index page:
// Correct status code?
// Correct result?

// Create one suite for the API:
const request = require('request');
const assert = require('assert');

const url = 'http://127.0.0.1:7865/';

// eslint-disable-next-line no-undef
describe('Index page', () => {
  // eslint-disable-next-line no-undef
  it('Correct status code', (done) => {
    request.get(url, (error, response) => {
      assert.strictEqual(response.statusCode, 200);
      done();
    });
  });
  // eslint-disable-next-line no-undef
  it('Correct result', (done) => {
    request.get(url, (error, response, body) => {
      assert.strictEqual(body, 'Welcome to the payment system');
      done();
    });
  });
});
describe('Cart page', () => {
  it('Correct status code', (done) => {
    request.get(`${url}cart/1`, (error, response) => {
      assert.strictEqual(response.statusCode, 200);
      done();
    });
  });
  it('Correct result', (done) => {
    request.get(`${url}cart/1`, (error, response, body) => {
      assert.strictEqual(body, 'Payment methods for cart 1');
      done();
    });
  });
  // incorrect id
  it('Incorrect id', (done) => {
    // eslint-disable-next-line no-unused-vars
    request.get(`${url}cart/abc`, (error, response, body) => {
      assert.strictEqual(response.statusCode, 404);
      done();
    });
  });
});
describe('Payment methods', () => {
  it('Correct status code', (done) => {
    request.get(`${url}available_payments`, (error, response) => {
      assert.strictEqual(response.statusCode, 200);
      done();
    });
  });
  it('Correct result', (done) => {
    request.get(`${url}available_payments`, (error, response, body) => {
      const obj = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      assert.strictEqual(body, JSON.stringify(obj));
      done();
    });
  });
});
describe('Login', () => {
  it('Correct status code', (done) => {
    request.post(`${url}login`, (error, response) => {
      assert.strictEqual(response.statusCode, 200);
      done();
    });
  });
  it('Correct result', (done) => {
    request.post(`${url}login`, (error, response, body) => {
      // get the username from the body
      // eslint-disable-next-line no-unused-vars
      const { username } = body;
      assert.strictEqual(body, `Welcome ${username}`);
      done();
    });
  });
});
