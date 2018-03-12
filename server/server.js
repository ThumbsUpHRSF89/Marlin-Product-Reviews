const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const reviewController = require('../db/models/reviews.js');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8002;

mongoose.connect('mongodb://database/hackazonReviews');

app.use(bodyParser.json());
app.use(cors());

// FOR PRODUCTION:
app.use(express.static(path.join(__dirname, '/../client/dist/')));

// FOR DEVELOPMENT:
// app.use('/product/:id/', express.static(path.join(__dirname, '/../client/dist/')));

app.get('/productReviews', (req, res) => {
  const { productID } = req.query;
  reviewController.findByProductID(productID, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('grabbing data from db...');
      res.json(data);
    }
  });
});


app.listen(port, () => {
  console.log(`Gotcha at port ${port}!\nLove,\nYour Server`);
});
