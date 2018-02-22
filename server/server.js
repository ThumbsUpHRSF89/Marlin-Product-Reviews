const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 8002;

mongoose.connect('mongodb://localhost/products');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist/')));

app.listen(port, () => {
  console.log(`Gotcha at port ${port}!\nLove,\nYour Server`);
});

