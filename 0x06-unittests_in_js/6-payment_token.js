function getPaymentTokenFromAPI(sucess) {
  return new Promise((resolve) => {
    const obj = { data: 'Successful response from the API' };
    if (sucess === true) {
      resolve(obj);
    }
  });
}

module.exports = getPaymentTokenFromAPI;
