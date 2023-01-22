import { useContext, useEffect } from "react";
import BreakpointContext from "../../../state/breakpoint/BreakpointContext";
import ProjectsContext from "../../../state/projects/ProjectsContext";
import classes from "../projects.module.scss";
import { Secondary } from "/src/ui/components";

export function FilterButtons({
  impButtons,
  filterProjects,
  setProjectsArr,
  setHiddenSidebar,
}) {
  const { projects } = useContext(ProjectsContext);
  const { breakpoint } = useContext(BreakpointContext);

  const formatButton = () => {
    const allButtons = document.getElementsByClassName(`button`);
    for (var x = 0; x < allButtons.length; x++) {
      allButtons[x].classList.remove("theme-button-active");
    }
  };

  const selectButton = (category) => {
    formatButton();
    const button = document.getElementById(`button-${category}`);
    button.classList.add("theme-button-active");
  };

  useEffect(() => {
    formatButton();
    selectButton("todos");
  }, [projects]);

  const buttonClick = () => {
    setHiddenSidebar(true);

    const gallery = document.getElementById("gallery");
    gallery.scrollTop = 0;
  };

  return (
    <div className={classes.projects__sidebarButtons}>
      <Secondary
        id="button-todos"
        className={`button`}
        name="todos"
        size={breakpoint <= 1024 ? "lg" : "xl"}
        onClick={() => {
          setProjectsArr(projects);
          selectButton("todos");
          buttonClick();
        }}
      />
      {impButtons.map((category, i) => {
        return (
          <div key={i}>
            <Secondary
              id={`button-${category}`}
              className={`button`}
              name={category}
              size={breakpoint <= 1024 ? "lg" : "xl"}
              onClick={() => {
                filterProjects(category);
                selectButton(category);
                buttonClick();
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
