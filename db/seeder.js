const data = require('./sampleReviewData');
const mongoose = require('mongoose');
const reviewController = require('./models/reviews.js');

mongoose.connect('mongodb://database/hackazonReviews');

const seedDb = (dataArray) => {
  console.log('storing data...');
  reviewController.saveAll(dataArray, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('yaaay data stored succesfully');
      mongoose.disconnect();
    }
  });
};

seedDb(data.reviewData);
