// Write the server reusing everything you created
// Inside the file named full_server/server.js, create a small Express server:

// It should use the routes defined in full_server/routes/index.js
// It should use the port 1245

const express = require('express');

const app = express();

const port = 1245;

const router = require('./routes/index');

// use here is serving as our middleware
app.use(router);

app.listen(port);

module.exports = app;
