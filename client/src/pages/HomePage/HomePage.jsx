import React from "react";
import AddStudent from "../../components/Student/AddStudent/AddStudent";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className="container mt-5  d-flex justify-content-center">
        <AddStudent />
      </div>
      <div className={`${styles.studentlist} container mt-5 p-4 `}>
        <h3 className="text-center text-dark " style={{ fontWeight: "700" }}>
          Student List
        </h3>
      </div>
    </>
  );
};

export default HomePage;
