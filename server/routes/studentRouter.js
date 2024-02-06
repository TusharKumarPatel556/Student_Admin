const express = require("express");

const { addStudent } = require("../controller/studentController");

const studentRouter = express.Router();

studentRouter.post("/add-student", addStudent);

module.exports = studentRouter;
