import classes from "../home.module.scss";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Title, Subtitle } from "/src/ui/components";
import { Buttons } from "../components";
import { useContext } from "react";
import BreakpointContext from "../../../state/breakpoint/BreakpointContext";

export function Resume({ openComingModal }) {
  const { breakpoint } = useContext(BreakpointContext);

  return (
    <section className={classes.home__about}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
        }}
      >
        <Title size={breakpoint >= 1280 ? "80px" : "60px"}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              strings: ["Mirko Peramás", "mpeardev"],
            }}
          />
        </Title>
        <Subtitle title={"frontend developer"} />
        <div className={classes.home__aboutResume}>
          <p>
            Hola! me llamo Mirko, aficionado del desarrollo web y la tecnología.
            Actualmente me especializo como desarrollador Frontend, con
            experiencia en creación de templates y aplicaciones web.
            <a onClick={openComingModal}> Aquí</a> puedes saber un poco más
            sobre mí y revisar algunos de mis proyectos y colaboraciones.
          </p>
        </div>
        <Buttons openComingModal={openComingModal} />
      </motion.div>
    </section>
  );
}
