const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
import { nanoid } from "nanoid";

const Url = require("../models/Url");

//@route      POST /api/url/shorten
//@desc       Create Short Url

router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = process.env.HOST_URI;

  //create url code
  const urlCode = nanoid(9);

  //check long url is valid
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });
      if (url) {
        res.status(200).json(url);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;
        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        await url.save();

        res.status(200).json(url);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json("Server error");
    }
  } else {
    res.status(401).json("Invalid Url");
  }
});

module.exports = router;
