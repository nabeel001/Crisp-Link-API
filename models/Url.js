const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: { type: String, default: Date.now },
  },
  { timestamps: true }
);
urlSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 });

module.exports = mongoose.model("Url", urlSchema, "Urls");
