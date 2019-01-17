const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Valid Email Address is Required"
  },
  email: {
    type: String,
    // match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true,
    trim: true,
    required: "Valid Email Address is Required"
  },
  comment: {
    type: String,
    trim: true,
    required: "Valid Email Address is Required"
  }

});

var Review = mongoose.model('Reviews', ReviewSchema);

module.exports = Review;