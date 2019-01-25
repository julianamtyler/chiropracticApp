const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
    type: String,
    trim: true
  },
  content: {
    type: String,
    trim: true
  }

});

var Blog = mongoose.model('Blogs', BlogSchema);

module.exports = Blog;