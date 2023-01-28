import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MPeardevApp } from "./MPeardevApp";
import { BreakpointProvider } from "./state/breakpoint/BreakpointProvider";
import { ProjectsProvider } from "./state/projects/ProjectsProvider";
import { ThemeProvider } from "./state/theme/ThemeProvider";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BreakpointProvider>
        <ThemeProvider>
          <ProjectsProvider>
            <MPeardevApp />
          </ProjectsProvider>
        </ThemeProvider>
      </BreakpointProvider>
    </BrowserRouter>
  </React.StrictMode>
);
