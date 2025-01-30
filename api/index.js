const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let storedText = "Hello world";

// Route to get the stored text
app.get("/gettext", (req, res) => {
  console.log("Fetching text");
  res.send(storedText);
});

// Route to update the stored text
app.post("/updatetext", (req, res) => {
  const { text } = req.body;

  if (text) {
    storedText = text;
    res.send(`Text updated to: ${storedText}`);
  } else {
    res.status(400).send("No text provided");
  }
});

// For local development, start the Express server
if (process.env.NODE_ENV !== "production") {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Vercel needs an exported handler for serverless functions
module.exports = (req, res) => {
  app(req, res); // Calling express app to handle the request
};
