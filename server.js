const express = require('express');
const app = express();

const routes = require('./routes');

const PORT = process.env.PORT || 3000;

// require db connection
require('./models');

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var cors = require('cors');
app.use(cors());

app.use(routes);

// Bootstrap server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});