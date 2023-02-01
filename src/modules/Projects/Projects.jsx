import { useContext, useEffect, useState } from "react";
import DataContext from "../../state/data/DataContext";
import { PageContainer } from "../../ui/components";
import { ProjectsGallery, Sidebar, ShowIcon } from "./components";
import classes from "./projects.module.scss";

export function Projects() {
  const { data } = useContext(DataContext);

  const [hiddenSidebar, setHiddenSidebar] = useState(true);

  const [projectsArr, setProjectsArr] = useState(data?.projects);
  const [categoriesArr, setCategoriesArr] = useState([]);

  const filterProjects = (p) => {
    const filtered = data.projects.filter(({ category }) => category === p);
    setProjectsArr(filtered);
  };

  if (data) {
    data.projects?.map((e) => {
      return categoriesArr.push(e.category);
    });
  }

  const impButtons = [...new Set(categoriesArr)];

  useEffect(() => {
    setProjectsArr(data.projects);
  }, [data]);

  return (
    <>
      <div className={classes.projects}>
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
      </div>
    </>
  );
}
