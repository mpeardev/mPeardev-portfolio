import { Route, Routes } from "react-router-dom";
import { HomePage, AboutPage, ProjectsPage } from "../components";

export function AppRouter({ breakpoint, openComingModal }) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              breakpoint={breakpoint}
              openComingModal={openComingModal}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}
