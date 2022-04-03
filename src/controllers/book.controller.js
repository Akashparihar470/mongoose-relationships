const express = require("express");

const Book = require("../models/book.modal");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController(Book).post);

router.get("", crudController(Book).getAll);

router.get("/:id", crudController(Book).getOne);

router.patch("/:id", crudController(Book).updateOne);

router.delete("/:id", crudController(Book).deleteOne);

module.exports = router;
