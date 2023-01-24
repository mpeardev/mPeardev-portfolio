import { Route, Routes } from "react-router-dom";
import { HomePage } from "../modules/Home";
import { AboutPage } from "../modules/About";
import { ProjectsPage } from "../modules/Projects";

export function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}
