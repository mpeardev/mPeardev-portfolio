import { createContext } from "react";

export const initialProjectsState = {
  projects: [],
  setProjects: () => null,
};

const ProjectsContext = createContext(initialProjectsState);
export default ProjectsContext;
