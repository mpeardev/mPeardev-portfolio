import { motion } from "framer-motion";
import { useContext } from "react";
import BreakpointContext from "../../../state/breakpoint/BreakpointContext";
import { Title } from "/src/ui/components";

export function SubtitlesAbout({ name }) {
  const { breakpoint } = useContext(BreakpointContext);

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div initial="hidden" whileInView="visible" variants={variants}>
      <Title title={name} size={breakpoint <= 1024 ? "30px" : "40px"} />
    </motion.div>
  );
}
