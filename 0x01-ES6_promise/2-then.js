// Promise is handle or not Catch me if you can!
function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API'));
}

export default handleResponseFromAPI;
