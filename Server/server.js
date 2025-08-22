const express = require("express");
const app = express();
const path = require("path");
const port = 3030;
app.use(express.static(path.join(__dirname, "../App")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../App/index.html"));
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
