const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  Name: {
    type: String,
    trim: true,
    required: "Valid Email Address is Required"},
  Email: {
    type: String,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true,
    trim: true,
    required: "Valid Email Address is Required"},
  Comment: {
   type: String,
   trim: true,
   required: "Valid Email Address is Required"
  }
   
});

var Review = mongoose.model('Reviews', ReviewSchema);

module.exports = Review;