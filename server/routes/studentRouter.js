const express = require("express");

const {
  addStudent,
  getallStudents,
} = require("../controller/studentController");

const studentRouter = express.Router();

studentRouter.post("/add-student", addStudent);
studentRouter.get("/get-students", getallStudents);

module.exports = studentRouter;
