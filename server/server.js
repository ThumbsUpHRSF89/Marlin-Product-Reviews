const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const reviewController = require('../db/models/reviews.js');

const app = express();
const port = 8002;

mongoose.connect('mongodb://localhost/hackazonReviews');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist/')));

app.get('/product/*', (req, res) => {
  const productID = req.query.id;
  reviewController.findByProductID(productID, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.json(data);
    }
  });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Gotcha at port ${port}!\nLove,\nYour Server`);
});
