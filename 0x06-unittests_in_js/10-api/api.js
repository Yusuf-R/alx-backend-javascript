const express = require('express');

const port = 7865;

const app = express();

// Add middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  // check if id is a number
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  const obj = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(obj);
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API available on localhost port ${port}`);
});
