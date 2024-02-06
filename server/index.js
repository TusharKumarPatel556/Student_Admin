const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyparser = require("body-parser");

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.listen(process.env.PORT, () => {
  console.log(`Server has started on http://localhost:${process.env.PORT}`);
});
