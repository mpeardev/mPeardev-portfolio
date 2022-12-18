import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MPeardevApp } from "./MPeardevApp";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <MPeardevApp />
  </BrowserRouter>
  // </React.StrictMode>
);
