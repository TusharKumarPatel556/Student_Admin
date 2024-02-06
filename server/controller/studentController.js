const pool = require("../model/dbcon");

const addStudent = async (req, res) => {
  try {
    console.log("request arrived");
    const { name, roll, contact, standard } = req.body;

    const StudentExist = await pool.query(
      "SELECT * FROM students WHERE roll=$1 ",
      [roll]
    );
    console.log(StudentExist.rows.length);
    if (StudentExist.rows.length === 0) {
      try {
        const created_at = new Date();
        const updated_at = new Date();
        const newStudent = await pool.query(
          "INSERT INTO students (name,roll,contact,standard,created_at,updated_at) VALUES($1, $2, $3,$4,$5,$6) RETURNING *",
          [name, roll, contact, standard, created_at, updated_at]
        );
        console.log(newStudent.rows[0]);
        res.status(200).json({
          task: newStudent.rows[0],
          message: "success",
        });
      } catch (error) {
        res.status(200).json({
          message: error.message,
        });
      }
    } else {
      res.json({
        message: "student Already exists",
      });
    }
  } catch (error) {
    res.json({
      message: "Try After Some Time",
    });
  }
};

const getallStudents = async (req, res) => {
  try {
    const allStudents = await pool.query("SELECT * FROM students");

    res.status(200).json({
      students: allStudents.rows,
      message: "success",
    });
  } catch (error) {
    res.json({
      message: "failed",
    });
  }
};

module.exports = { addStudent, getallStudents };
