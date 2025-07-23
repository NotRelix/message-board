const express = require("express");
const app = express();
const path = require("node:path");
const PORT = process.env.PORT || 3000;

const homeRouter = require('./routes/homeRouter');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', homeRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})