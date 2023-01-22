import { useContext, useEffect, useState } from "react";
import ProjectsContext from "../../state/projects/ProjectsContext";
import { PageContainer } from "../../ui/components";
import { ProjectsGallery, Sidebar, ShowIcon } from "./components";
import classes from "./projects.module.scss";

export function Projects() {
  const { projects } = useContext(ProjectsContext);

  const [hiddenSidebar, setHiddenSidebar] = useState(true);

  const [projectsArr, setProjectsArr] = useState(projects);
  const [categoriesArr, setCategoriesArr] = useState([]);

  const filterProjects = (p) => {
    const filtered = projects.filter(({ category }) => category === p);
    setProjectsArr(filtered);
  };

  projects.map((e) => {
    return categoriesArr.push(e.category);
  });

  const impButtons = [...new Set(categoriesArr)];

  useEffect(() => {
    setProjectsArr(projects);
  }, [projects]);

  return (
    <>
      <section className={classes.projects}>
        <PageContainer>
          <div className={classes.projects__content}>
            <ShowIcon onClick={() => setHiddenSidebar(!hiddenSidebar)} />
            <Sidebar
              impButtons={impButtons}
              filterProjects={filterProjects}
              setProjectsArr={setProjectsArr}
              hiddenSidebar={hiddenSidebar}
              setHiddenSidebar={setHiddenSidebar}
            />
            <ProjectsGallery projectsArr={projectsArr} />
          </div>
        </PageContainer>
      </section>
    </>
  );
}
