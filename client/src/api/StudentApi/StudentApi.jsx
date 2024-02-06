import axios from "axios";

const BaseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
const token = localStorage.getItem("token");

export const addStudent = async (studentData) => {
  if (token) {
    try {
      const response = await axios({
        method: "post",
        url: `${BaseUrl}/student/add-student`,
        data: studentData,
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });

      return response.data.message;
    } catch (err) {
      return err;
    }
  } else {
    return "Task Creation Failed";
  }
};
export const getAllstudents = async () => {
  if (token) {
    try {
      const response = await axios({
        method: "get",
        url: `${BaseUrl}/student/get-students`,

        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });

      return response;
    } catch (err) {
      return err;
    }
  } else {
    return "Task Creation Failed";
  }
};
