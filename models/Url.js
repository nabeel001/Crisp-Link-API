const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  createdAt: { type: Date, expires: 3600, default: Date.now },
  //expires -> 7 days
});

module.exports = mongoose.model("Url", urlSchema, "Urls");
