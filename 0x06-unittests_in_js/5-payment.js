const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const ops = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  // eslint-disable-next-line no-console
  console.log(`The total is: ${ops}`);
  return ops;
}
module.exports = sendPaymentRequestToApi;
