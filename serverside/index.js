const port = 3000;
const express = require("express");
const handle = require("./handlers");

const app = express();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.use(handle.notFound);

app.use(handle.errors);
