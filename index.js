const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db_config");

const app = express();
app.use(cors());

//connect to database
connectDB();

app.use(express.json({ extended: false }));
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
