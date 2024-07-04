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
            Soy un desarrollador de software ubicado en Perú. Tengo experiencia
            trabajando con diversas tecnologías web, especializándome en el
            desarrollo frontend de aplicaciones e interfaces. En todos mis
            proyectos, me esfuerzo por añadir la mayor calidad posible y crear
            experiencias óptimas para los usuarios, adaptándome a sus
            requerimientos y necesidades específicas.
            <br />
            Me destaco por ser una persona perseverante, siempre en constante
            aprendizaje y manteniéndome actualizado con las últimas novedades
            tecnológicas, con el objetivo de aportar el mayor valor posible a
            mis proyectos.
          </motion.p>
        </Content>
      </PageContainer>
    </section>
  );
}
