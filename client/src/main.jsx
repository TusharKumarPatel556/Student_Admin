import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StudentAdminProvider from "./context/StudentAdminContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StudentAdminProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StudentAdminProvider>
  </React.StrictMode>
);
