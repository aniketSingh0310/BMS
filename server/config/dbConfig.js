const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MongoUrl)
  .then(() => {
    console.log("Successfully connected DB");
  })
  .catch((err) => {
    console.log("Failed to connect DB with error:", err);
  });
