const mongoose = require("mongoose");
const connect_string = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(connect_string, {
      useNewUrlParser: true,
    });
    console.log("mongoDB connected....");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
