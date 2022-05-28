const mongoose = require("mongoose");

// Database Schema for Blogs Model
const BlogSchema = new mongoose.Schema({
  // to store the title of the Blog
  title: {
    type: String,
    required: true,
  },

  // Body of the blog.
  body: {
    type: String,
    required: true,
  },

  // to store the creation date and time of the blog.
  cDate: {
    type: Date,
    default: Date.now(),
  },

  // to store the updated date and time of the blog.
  uDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("blog", BlogSchema);
