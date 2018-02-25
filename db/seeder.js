const data = require('./sampleReviewData');
const mongoose = require('mongoose');
const reviewController = require('./models/reviews.js');

mongoose.connect('mongodb://localhost/hackazon');

const seedDb = (dataArray) => {
  console.log('storing data...', dataArray);
  reviewController.saveAll(dataArray, (err, docs) => {
    if (err) {
      throw err;
    } else {
      console.log('yaaay');
    }
  });
};

seedDb(data.reviewData);
