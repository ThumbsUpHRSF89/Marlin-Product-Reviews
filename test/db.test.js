const mongoose = require('mongoose');
const Reviews = require('../db/models/reviews.js');

mongoose.connect('mongodb://localhost/hackazonReviews');

describe('Database Testing', () => {
  it('should save a review model and find it in db with id', () => {
    const data = {
      product_id: 999,
      username: 'sara',
      text: "this was ok.  did the job, but wasn't as great as they made it sound",
      rating: 0,
      header: 'Started off strong....aaaaaaand failed :( *UPDATES',
      date: 'August 14, 2018',
    };

    Reviews.saveAll(data, (err) => {
      if (err) {
        throw err;
      } else {
        console.log('yaaay, review data stored succesfully');
      }
    });

    Reviews.findByProductID(999, (err, results) => {
      if (err) {
        throw err;
      } else {
        expect(results.username).toBe(data.username);
      }
    });
  });

  it('should get review data and return it in an array of objects', () => {
    Reviews.findByProductID(1, (err, results) => {
      if (err) {
        throw err;
      } else {
        expect(results).toBeInstanceOf(Array);
        expect(results.length).toBeGreaterThan(0);
      }
    });
  });

  it('should return an array of objects with the correct keys', () => {
    Reviews.findByProductID(1, (err, results) => {
      if (err) {
        throw err;
      } else {
        expect(typeof results[0]).toBe('object');
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

  it('should return data in correct format', () => {
    Reviews.findByProductID(1, (err, results) => {
      if (err) {
        throw err;
      } else {
        expect(typeof results[0].product_id).toBe('number');
        expect(typeof results[0].username).toBe('string');
        expect(typeof results[0].text).toBe('string');
        expect(typeof results[0].rating).toBe('number');
        expect(typeof results[0].header).toBe('string');
        expect(typeof results[0].date).toBe('string');
      }
    });
  });
});
