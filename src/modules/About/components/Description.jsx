import classes from "../about.module.scss";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { PageContainer } from "../../../ui/components";
import { TitlePage } from ".";

export function Description() {
  const scrollAmount = 700;

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, scrollAmount], [1, 0]);
  const scale = useTransform(scrollY, [0, scrollAmount], [1, 1.2]);
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
        <TitlePage />
        <motion.p
          initial="hidden"
          animate="visible"
          variants={variants}
          style={{ opacity, scale, y }}
        >
          Soy un desarrollador de software ubicado en Perú. Cuento con
          experiencia trabajando con diferentes tecnologías web siendo mi
          especialidad el desarrollo frontend de aplicaciones e interfaces,
          añadiendo en todos mis proyectos la mejor calidad y logrando
          experiencias de usuarios óptimas en base a los requerimientos y
          solicitudes brindadas. <br />
          Me caracterizo por ser una persona perserverante, encontrándome en
          constante y permanente aprendizaje para estar siempre actualizado con
          las últimas novedades, tecnologías y poder añadirle el mayor valor
          posible a mis proyectos.
        </motion.p>
      </PageContainer>
    </section>
  );
}
