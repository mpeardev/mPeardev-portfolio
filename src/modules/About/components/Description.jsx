import { useContext } from "react";
import classes from "../about.module.scss";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { Content, PageContainer } from "../../../ui/components";
import { TitlePage } from ".";
import BreakpointContext from "../../../state/breakpoint/BreakpointContext";

export function Description() {
  const { breakpoint } = useContext(BreakpointContext);

  const scrollAmount = 500;
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, scrollAmount], [1, 0]);
  const scale = useTransform(
    scrollY,
    [0, scrollAmount],
    [1, breakpoint <= 768 ? 1 : 1.2]
  );
  const y = useTransform(scrollY, [0, scrollAmount], [0, 80]);

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.7,
        duration: 2,
      },
    },
  };

  return (
    <section className={classes.about__description}>
      <PageContainer>
        <Content>
          <TitlePage />
          <motion.p
            initial="hidden"
            animate="visible"
            variants={variants}
            style={{ opacity, scale, y }}
          >
            Soy un desarrollador de software con formación universitaria ubicado
            en Perú, especializado en el desarrollo frontend de aplicaciones e
            interfaces web. Me esfuerzo por ofrecer la mayor calidad en cada
            proyecto, creando experiencias óptimas y adaptadas a las necesidades
            específicas de los usuarios.
            <br /> <br />
            Me caracteriza la perseverancia y el compromiso con el aprendizaje
            continuo, manteniéndome actualizado con las últimas tendencias
            tecnológicas. Trabajo estrechamente con equipos de desarrollo,
            siguiendo sus lineamientos y estándares para garantizar soluciones
            de alto valor.
          </motion.p>
        </Content>
      </PageContainer>
    </section>
  );
}
