import { useState, useEffect } from "react";
import ProjectsContext, { initialProjectsState } from "./ProjectsContext";
import projectsData from "/src/data/projects.json";

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState(initialProjectsState.projects);

  useEffect(() => {
    setProjects(projectsData.projects);
  }, [projects]);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
