import { Card } from ".";
import classes from "../projects.module.scss";

export function ProjectsGallery({ projectsArr }) {
  return (
    <div id="gallery" className={classes.projects__gallery}>
      {projectsArr && (
        <div>
          {projectsArr.map((project, i) => {
            return (
              <div key={i}>
                <Card
                  index={i}
                  projectName={project?.projectName}
                  companyName={project?.companyName}
                  technologies={project?.technologies}
                  repo={project?.links[0].repository}
                  deploy={project?.links[0].deploy}
                  images={project?.projectImages}
                  category={project?.category}
                  brandImage={project?.brandImage}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
