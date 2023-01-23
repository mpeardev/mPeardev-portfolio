import { useContext, useEffect, useState } from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ThemeContext from "../../../state/theme/ThemeContext";
import particlesLight from "../config/particles.json";
import particlesDark from "../config/particles-dark.json";

export function ParticlesBg() {
  const { theme } = useContext(ThemeContext);
  const [state, setState] = useState(particlesDark);

  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  useEffect(() => {
    switch (theme) {
      case "dark":
        setState(particlesDark);
        break;
      case "light":
        setState(particlesLight);
        break;
      default:
    }
  }, [theme]);

  return <Particles options={state} init={particlesInit} />;
}
