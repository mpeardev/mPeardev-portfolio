import { Title } from "../../../ui/components";
import { TiUser } from "../../../ui/icons";
import classes from "../about.module.scss";
import { motion } from "framer-motion";

export function TitlePage() {
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
          <TiUser size="6em" />
        </div>
      </div>
      <Title title={"Sobre mi"} size="80px" />
    </motion.div>
  );
}
