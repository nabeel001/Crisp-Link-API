const express = require("express");
const router = express.Router();

const Url = require("../models/Url");

//@route      GET /:urlCode
//@desc       Redirect to the long url

router.get("/:code", async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      res.status(404).json("No Url found");
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json("Server Error");
  }
});
module.exports = router;
