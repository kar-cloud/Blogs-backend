const mongoose = require("mongoose");

// Function to connect with a MongoDB Instance.
const connectDB = async () => {
  mongoose.connect("mongodb://localhost:27017/blogsApp");
};

module.exports = connectDB;
