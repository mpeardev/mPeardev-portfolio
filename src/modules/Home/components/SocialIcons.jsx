import { motion } from "framer-motion";
import { useContext } from "react";
import BreakpointContext from "../../../state/breakpoint/BreakpointContext";
import classes from "../home.module.scss";
import { BsLinkedin, BsGithub, BsWhatsapp } from "/src/ui/icons";

export function SocialIcons() {
  const { breakpoint } = useContext(BreakpointContext);

  return (
    <div className={classes.home__social}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      >
        <a
          href="https://www.linkedin.com/in/mirkoperamas/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsLinkedin size={breakpoint >= 768 ? "1.5rem" : "1.2rem"} />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          href="https://github.com/mirkoperamas"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsGithub size={breakpoint >= 768 ? "1.5rem" : "1.2rem"} />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          href="https://api.whatsapp.com/send?phone=51956000371&text=Hola%20Mirko!%20,%20quiero%20contactarme%20contigo%20para%20..."
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsWhatsapp size={breakpoint >= 768 ? "1.5rem" : "1.2rem"} />
        </a>
      </motion.div>
    </div>
  );
}
