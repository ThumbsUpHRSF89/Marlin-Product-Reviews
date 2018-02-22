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

