import { useContext, useEffect, useState } from "react";
import DataContext from "../../state/data/DataContext";
import { Content, PageContainer } from "../../ui/components";
import { ProjectsGallery } from "./components";
import classes from "./projects.module.scss";
import { TitlePage } from "./components/TitlePage";

export function Projects() {
  const { data } = useContext(DataContext);

  const [projectsArr, setProjectsArr] = useState();

  useEffect(() => {
    if (data.projects) {
      // Copia de array
      const shuffledProjects = [...data.projects];
      // Función para mezclar aleatoriamente el array
      shuffledProjects.sort(() => Math.random() - 0.5);
      setProjectsArr(shuffledProjects);
      return () => {
        setProjectsArr(null);
      };
    }
  }, [data]);

  // useEffect(() => {
  //   setProjectsArr(data.projects);
  // }, [data]);

  return (
    <>
      <div className={classes.projects}>
        <div className={classes.projects__content}>
          <section className={classes.projects__description}>
            <PageContainer>
              <Content>
                <TitlePage />
                {projectsArr && projectsArr.length > 0 && (
                  <ProjectsGallery projectsArr={projectsArr} />
                )}
              </Content>
            </PageContainer>
          </section>
        </div>
      </div>
    </>
  );
}
