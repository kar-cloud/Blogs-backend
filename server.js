require("dotenv").config();
const express = require("express");

const connectDB = require("./server/config/db");
const blogRouter = require("./server/routes/api/blog.route");
const reviewRouter = require("./server/routes/api/review.route");

const app = express();
const PORT = 8080;

// Connect MongoDB Instance.
connectDB();

app.use(express.json());

// Define Routes
app.use("/api/blogs", blogRouter);
app.use("/api/reviews", reviewRouter);

// Listen to the server
app.listen(process.env.PORT || PORT, () => {
  console.log("Server is Running");
});
