const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("It's working");
});

app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}`);
});
