const mongoose = require('mongoose');
const Reviews = require('../db/models/reviews.js');

mongoose.connect('mongodb://localhost/hackazonReviews');

describe('Tests for database', () => {
  it('should get review data and return it in an array', () => {
    Reviews.findByProductID(1, (err, results) => {
      if (err) {
        throw err;
      } else {
        expect(results).toBeInstanceOf(Array);
        expect(results.length).toBeGreaterThan(0);
      }
    });
  });

  it('should return an array of objects with the correct properties', () => {
    Reviews.findByProductID(1, (err, results) => {
      if (err) {
        throw err;
      } else {
        expect(results[0]).toHaveProperty('product_id', 1);
        expect(results[0]).toHaveProperty('product_id');
        expect(results[0]).toHaveProperty('username');
        expect(results[0]).toHaveProperty('text');
        expect(results[0]).toHaveProperty('rating');
        expect(results[0]).toHaveProperty('header');
        expect(results[0]).toHaveProperty('date');
      }
    });
  });
});
