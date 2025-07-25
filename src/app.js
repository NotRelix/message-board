const express = require("express");
const app = express();
const path = require("node:path");
require("dotenv").config();

const homeRouter = require('./routes/homeRouter');
const newRouter = require("./routes/newRouter");
const messageRouter = require('./routes/messageRouter')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRouter);
app.use('/new', newRouter);
app.use('/message', messageRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on port ${PORT}`);
})