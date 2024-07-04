const mongoose = require("mongoose");

const URI = process.env.DB_URI;

const connectDb = async () => {
  try {
    mongoose.connect(URI);
    console.log("connection sucessfully to DB..");
  } catch (error) {
    console.error("dtabase connection failed", error);
    process.exit(0);
  }
};

module.exports = connectDb;
