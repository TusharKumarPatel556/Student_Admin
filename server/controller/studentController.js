const pool = require("../model/dbcon");

const addStudent = async (req, res) => {
  try {
    const { title, description, status = false } = req.body;
    const { user_id } = req.body.user;
    const created_at = new Date();
    const updated_at = new Date();

    const newStudent = await pool.query(
      "INSERT INTO students (user_id,title, description, status,created_at,updated_at) VALUES($1, $2, $3,$4,$5,$6) RETURNING *",
      [user_id, title, description, status, created_at, updated_at]
    );

    res.status(200).json({
      task: newStudent.rows[0],
      message: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { addStudent };
