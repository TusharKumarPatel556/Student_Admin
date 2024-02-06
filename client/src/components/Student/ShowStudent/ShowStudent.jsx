import { useEffect, useState, useContext } from "react";
import React from "react";
import styles from "./ShowStudent.module.css";
import { StudentContext } from "../../../context/StudentAdminContext";
import { getAllstudents } from "../../../api/StudentApi/StudentApi";

const ShowStudent = () => {
  const [allStudents, setallStudents] = useState([]);
  const { taskadded, setTaskadded } = useContext(StudentContext);

  const studentList = async () => {
    const response = await getAllstudents();
    if (response.data.message === "success") {
      setTimeout(() => {
        setallStudents(response.data.students);
      }, 1000);
    }
  };

  useEffect(() => {
    studentList();
  }, [taskadded]);

  return (
    <div className="container">
      {allStudents.length ? (
        <>
          {allStudents.map((item, index) => {
            console.log(item);
            return (
              <div key={item.roll} className="card mt-2">
                <div className="card-header">{item.name}</div>
                <div className="card-body">
                  <h5 className="card-title">Roll number :{item.roll}</h5>
                  <h5 className="card-title">Standard :{item.standard}</h5>

                  <a href="#" className="btn btn-primary">
                    {item.contact}
                  </a>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <h3 className="text-center">Loading Students Data ...</h3>
      )}
    </div>
  );
};

export default ShowStudent;
