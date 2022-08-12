const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  createdAt: { type: Date, expires: 604800, default: Date.now },
  //expires -> 7 days
});

module.exports = mongoose.model("Url", urlSchema, "Urls");
