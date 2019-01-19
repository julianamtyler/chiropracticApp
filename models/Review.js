const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    name: {
    type: String,
    trim: true,
    required: "Name is required"
  },
  email: {
    type: String,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    trim: true,
    required: "Valid Email Address is Required"
  },
  comment: {
    type: String,
    trim: true,
    required: "Please place your review here"
  }

});

var Review = mongoose.model('Reviews', ReviewSchema);

module.exports = Review;