import { Title } from "../../../ui/components";
import { TiUser } from "../../../ui/icons";
import classes from "../about.module.scss";
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
      className={classes.about__title}
    >
      <div className={`theme-blur-bg ${classes.about__titleImg}`}>
        <div>
          <TiUser size={breakpoint <= 768 ? "3em" : "6em"} />
        </div>
      </div>
      <Title title={"Sobre mi"} size={breakpoint <= 768 ? "50px" : "75px"} />
    </motion.div>
  );
}
