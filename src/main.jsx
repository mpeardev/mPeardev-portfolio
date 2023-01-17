import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MPeardevApp } from "./MPeardevApp";
import ThemeProvider from "./state/theme/ThemeProvider";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MPeardevApp />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
