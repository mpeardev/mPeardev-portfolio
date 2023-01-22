import { Card } from ".";
import classes from "../projects.module.scss";

export function ProjectsGallery({ projectsArr }) {
  return (
    <div id="gallery" className={`scroll-design ${classes.projects__gallery}`}>
      <div>
        {projectsArr.map((project, i) => {
          return (
            <div key={i}>
              <Card
                title={project?.name}
                tech={project?.tecnologies}
                repo={project?.links[0].repository}
                deploy={project?.links[0].deploy}
                image={project?.image}
                index={i}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
