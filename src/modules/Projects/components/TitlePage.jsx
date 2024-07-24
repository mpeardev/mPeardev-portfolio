import { Title } from "../../../ui/components";
import classes from "../projects.module.scss";
import { motion } from "framer-motion";
import { useContext } from "react";
import BreakpointContext from "../../../state/breakpoint/BreakpointContext";

export function TitlePage() {
  const { breakpoint } = useContext(BreakpointContext);

  const variants = {
    start: {
      opacity: 0,
    },
    finish: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 3.5,
      },
    },
  };

  return (
    <motion.div
      initial="start"
      animate="finish"
      variants={variants}
      className={classes.projects__title}
    >
      <Title title={"Proyectos"} size={breakpoint <= 768 ? "45px" : "65px"} />
    </motion.div>
  );
}
