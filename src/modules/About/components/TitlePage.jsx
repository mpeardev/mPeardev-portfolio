import { Title } from "../../../ui/components";
import { TiUser } from "../../../ui/icons";
import classes from "../about.module.scss";
import { motion } from "framer-motion";

export function TitlePage() {
  const variants = {
    start: {
      scale: 0,
      opacity: 0,
      y: "-30vh",
    },
    finish: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 3,
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
          <TiUser size="6em" />
        </div>
      </div>
      <Title title={"Sobre mi"} size="60px" />
    </motion.div>
  );
}
