const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

//connect to database
const mongoose = require("mongoose");
const connect_string = process.env.MONGO_URI;
mongoose.connect(connect_string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json({ extended: false }));
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
