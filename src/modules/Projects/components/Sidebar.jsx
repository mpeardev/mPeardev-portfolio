import { Title } from "/src/ui/components";
import { FilterButtons } from "./FilterButtons";
import classes from "../projects.module.scss";
import { HiddenIcon } from "./HiddenIcon";
import { useContext } from "react";
import BreakpointContext from "../../../state/breakpoint/BreakpointContext";
import { motion } from "framer-motion";

export function Sidebar({
  impButtons,
  filterProjects,
  setProjectsArr,
  hiddenSidebar,
  setHiddenSidebar,
}) {
  const { breakpoint } = useContext(BreakpointContext);
  const modeSidebar = {
    left: "0",
  };

  return (
    <motion.section
      initial={{
        x: -500,
      }}
      animate={{
        x: 0,
        transition: { type: "spring", duration: 1, delay: 0.2 },
      }}
      className={`theme-sidebar ${classes.projects__sidebar}`}
      style={!hiddenSidebar ? modeSidebar : null}
    >
      <HiddenIcon onClick={() => setHiddenSidebar(!hiddenSidebar)} />
      <Title title="proyectos" size={breakpoint <= 1024 ? "30px" : "40px"} />
      <FilterButtons
        impButtons={impButtons}
        filterProjects={filterProjects}
        setProjectsArr={setProjectsArr}
        setHiddenSidebar={setHiddenSidebar}
      />
    </motion.section>
  );
}
