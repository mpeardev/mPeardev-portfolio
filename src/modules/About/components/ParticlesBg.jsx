import { useContext, useEffect, useState } from "react";
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

  useEffect(() => {
    switch (theme) {
      case "dark":
        setParticles(particlesDark);
        break;
      case "light":
        setParticles(particlesLight);
        break;
      default:
    }
  }, [theme]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.5,
      }}
    >
      <Particles options={particles} init={particlesInit} />
    </motion.div>
  );
}
