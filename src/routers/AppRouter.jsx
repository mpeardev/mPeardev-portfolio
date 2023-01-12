import { Route, Routes } from "react-router-dom";
import { HomePage, AboutPage, ProjectsPage } from "../components";

export function AppRouter({ breakpoint }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage breakpoint={breakpoint} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}
