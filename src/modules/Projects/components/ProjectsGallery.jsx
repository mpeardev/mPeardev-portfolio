import { Card } from ".";
import classes from "../projects.module.scss";

export function ProjectsGallery({ projectsArr }) {
  return (
    <div id="gallery" className={classes.projects__gallery}>
      <div>
        {projectsArr?.map((project, i) => {
          return (
            <div key={i}>
              <Card
                title={project?.name}
                tech={project?.technologies}
                repo={project?.links[0].repository}
                deploy={project?.links[0].deploy}
                image={project?.image}
                status={project?.status}
                index={i}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
