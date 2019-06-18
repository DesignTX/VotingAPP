require("dotenv").config();
const port = process.env.PORT;

const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();

const handle = require("./handlers/index");
const db = require("./models");

app.use(cors());
app.use(bodyparser.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.use(handle.notFound);

app.use(handle.errors);
