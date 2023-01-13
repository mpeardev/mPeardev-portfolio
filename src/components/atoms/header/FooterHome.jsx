import { motion } from "framer-motion";
import classes from "../../organims/Home/home.module.scss";

export function FooterHome() {
  return (
    <div className={classes.home__footer}>
      <motion.p
        initial={{
          y: 200,
        }}
        animate={{
          y: 0,
          transition: { type: "spring", duration: 1.5, delay: 0.5 },
        }}
      >
        &copy;{new Date().getFullYear()} All rights reserved
      </motion.p>
      <motion.p
        initial={{
          y: 200,
        }}
        animate={{
          y: 0,
          transition: { type: "spring", duration: 0.5, delay: 1.3 },
        }}
      >
        mPeardev - demo version
      </motion.p>
    </div>
  );
}
