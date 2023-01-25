import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ThemeContext from "../../../state/theme/ThemeContext";
import particlesLight from "../config/particles.json";
import particlesDark from "../config/particles-dark.json";
import { motion } from "framer-motion";

export function ParticlesBg() {
  const { theme } = useContext(ThemeContext);
  const [particles, setParticles] = useState(particlesDark);

  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  useLayoutEffect(() => {
    switch (theme) {
      case "dark":
        setParticles(particlesDark);
        break;
      case "light":
        setParticles(particlesLight);
        break;
    }
  }, [theme]);

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 18,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      style={{ position: "relative", zIndex: "0" }}
    >
      <Particles options={particles} init={particlesInit} />
    </motion.div>
  );
}
