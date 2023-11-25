const express = require('express');

const port = 7865;

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  // check if id is a number
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API available on localhost port ${port}`);
});
