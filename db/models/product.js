const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    unique: true,
  },
  category: String,
  image_url: String,
  rating: Number,
  numberOfRatings: Number,

});

const ProductModel = mongoose.Model('Product', productSchema);

const save = (product, callback) => {
  ProductModel.create(product, callback);
};

// for finding all object and setting them as state for ReviewSection
//    then within Review Section pass on state to ReviewList
//      from within ReviewList display 10 reviews.  button to show more.
const findAll = (callback) => {
  ProductModel
    .find()
    .exec(callback);
};

exports.save = save;
exports.findAll = findAll;
