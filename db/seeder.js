const data = require('./sampleReviewData');
const mongoose = require('mongoose');
const reviewController = require('./models/reviews.js');

mongoose.connect('mongodb://localhost/hackazonReviews');

const seedDb = (dataArray) => {
  console.log('storing data...', dataArray);
  reviewController.saveAll(dataArray, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('yaaay data stored succesfully');
    }
  });
};

seedDb(data.reviewData);
