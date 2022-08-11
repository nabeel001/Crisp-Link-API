const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortid = require("shortid");
const config = require("config");

const Url = require("../models/Url");

//@route      POST /api/url/shorten
//@desc       Create Short Url

router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;
  // const baseUrl = config.get("baseUrl");
  const baseUrl = process.env.HOST_URI;

  //check base url is valid
  if (!validUrl.isUri(baseUrl)) {
    res.status(401).json("Invalid Base Url");
  }

  //create url code
  const urlCode = shortid.generate();

  //check long url is valid
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });
      if (url) {
        res.json(url);
      } else {
        // const PORT = process.env.PORT || 5000;
        const shortUrl = baseUrl + "/" + urlCode;
        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        await url.save();

        res.json(url);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json("Server error");
    }
  } else {
    res.status(401).json("Invalid Long Url");
  }
});

module.exports = router;
