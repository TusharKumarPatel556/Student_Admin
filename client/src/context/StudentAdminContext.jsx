import React, { useState } from "react";
import { createContext } from "react";

export const StudentContext = createContext();

const StudentAdminProvider = ({ children }) => {
  const [taskadded, setTaskadded] = useState(false);
  const [loggedIn, setLoggedin] = useState(false);

  const initialState = {
    taskadded,
    setTaskadded,
    loggedIn,
    setLoggedin,
  };

  return (
    <StudentContext.Provider value={initialState}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentAdminProvider;
