import React, { useState, useContext } from "react";
import styles from "./AddStudent.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ErrorMsg from "../../../utils/ErrorMsg/ErrorMsg";
import { StudentContext } from "../../../context/StudentAdminContext";
import { addStudent } from "../../../api/StudentApi/StudentApi";

const AddStudent = () => {
  const { taskadded, setTaskadded } = useContext(StudentContext);
  const [message, setMessage] = useState("");

  const InitialValues = {
    name: "",
    roll: "",
    contact: "",
    standard: "",
  };

  const ValidationSchema = Yup.object({
    name: Yup.string().required("Name is Required"),
    roll: Yup.string().required("Roll Number is Required"),
    contact: Yup.string().required("Contact Number is Required"),
    standard: Yup.string().required("Standard is Required"),
  });

  const OnSubmit = async (values, { resetForm }) => {
    const response = await addStudent(values);

    setMessage(response);

    setTimeout(() => {
      setMessage("");
    }, 3000);
    setTimeout(() => {
      setTaskadded((prev) => !prev);
    }, 1000);
    resetForm();
  };

  return (
    <>
      <div>
        <button
          style={{ width: "400px" }}
          type="button"
          className="btn btn-success rounded-0 btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Add Student
        </button>

        <h2 className="mt-2 p-3 text-center text-danger">{message}</h2>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                ADD STUDENT
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Formik
                initialValues={InitialValues}
                validationSchema={ValidationSchema}
                onSubmit={OnSubmit}
              >
                <Form className={styles.form}>
                  <div className={styles.inputContainer}>
                    <label className={styles.inputlabel} htmlFor="name">
                      Name
                    </label>
                    <Field
                      className={styles.inputBox}
                      type="text"
                      name="name"
                      id="name"
                    />
                    <ErrorMessage component={ErrorMsg} name="name" />
                  </div>

                  <div className={styles.inputContainer}>
                    <label className={styles.inputlabel} htmlFor="roll">
                      Roll Number
                    </label>
                    <Field
                      className={styles.inputBox}
                      type="text"
                      name="roll"
                      id="roll"
                    />
                    <ErrorMessage component={ErrorMsg} name="roll" />
                  </div>

                  <div className={styles.inputContainer}>
                    <label className={styles.inputlabel} htmlFor="contact">
                      Contact Number
                    </label>
                    <Field
                      className={styles.inputBox}
                      type="text"
                      name="contact"
                      id="contact"
                    />
                    <ErrorMessage component={ErrorMsg} name="contact" />
                  </div>

                  <div className={styles.inputContainer}>
                    <label className={styles.inputlabel} htmlFor="standard">
                      Standard
                    </label>
                    <Field
                      className={styles.inputBox}
                      type="text"
                      name="standard"
                      id="standard"
                    />
                    <ErrorMessage component={ErrorMsg} name="standard" />
                  </div>

                  <div>
                    <div className="modal-footer">
                      <button
                        type="submit"
                        className="btn btn-success btn-lg"
                        data-bs-dismiss="modal"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
