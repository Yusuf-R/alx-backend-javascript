const express = require('express');

const port = 7865;

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API available on localhost port ${port}`);
});
