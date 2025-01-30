const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let storedText = "Hello world";

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
