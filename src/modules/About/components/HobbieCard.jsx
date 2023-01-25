import { Subtitle } from "/src/ui/components";
import classes from "../about.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export function HobbieCard({ title, image, description, index }) {
  const imageVariants = {
    float: ({ delay }) => ({
      x: 5,
      y: -3,
      y: 10,
      x: -25,
      transition: {
        delay,
        repeat: Infinity,
        duration: 4,
        repeatType: "reverse",
      },
    }),
  };

  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: ({ delay }) => ({
      opacity: 1,
      transition: {
        delay,
        duration: 1,
      },
    }),
  };

  return (
    <div className={classes.about__hobbiesCard}>
      <motion.div
        className={classes.about__hobbiesImage}
        animate="float"
        variants={imageVariants}
        custom={{ delay: (index + 1) * 1 }}
      >
        <img src={image} alt={`image-${title}`} />
      </motion.div>

      <motion.div
        className={classes.about__hobbiesDescription}
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        custom={{ delay: (index + 1) * 0.3 }}
      >
        <Subtitle title={title} />
        <p>{description}</p>
      </motion.div>
    </div>
  );
}
