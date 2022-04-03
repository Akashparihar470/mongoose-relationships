const express = require("express");

const connect = require("./configs/db");

const authorController = require("./controllers/author.controller");
const sectionController = require("./controllers/section.controller");
const bookController = require("./controllers/book.controller");

const app = express();
app.use(express.json());

app.use("/authors", authorController);
app.use("/sections", sectionController);
app.use("/books", bookController);

app.listen(2345, async function () {
  try {
    await connect();
    console.log("listening on port 2345");
    s;
  } catch (e) {
    console.log(e.message);
  }
});
