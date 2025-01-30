const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let storedText = "Initial text";

app.get("/gettext", (req, res) => {
  console.log("Fetching text");
  res.send(storedText);
});

app.post("/updatetext", (req, res) => {
  const { text } = req.body;

  if (text) {
    storedText = text;
    res.send(`Text updated to: ${storedText}`);
  } else {
    res.status(400).send("No text provided");
  }
});

module.exports = (req, res) => {
  app(req, res);
};
