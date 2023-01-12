import classes from "./home.module.scss";
import { motion } from "framer-motion";
import {
  PageContainer,
  Title,
  Subtitle,
  FooterHome,
  ButtonsHome,
  SocialIconsHome,
  Animatedlogo,
} from "../../../components";

export function Home({ breakpoint, openComingModal }) {
  return (
    <section className={classes.home}>
      <PageContainer>
        <div className={classes.home__content}>
          <div className={classes.home__main}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
              }}
            >
              <div className={classes.home__about}>
                <div>
                  <Title
                    title={"mPeardev"}
                    size={breakpoint >= 1280 ? "80px" : "60px"}
                  />
                </div>
                <div>
                  <Subtitle title={"software developer"} />
                </div>
                <div className={classes.home__aboutResume}>
                  <p>
                    Hola! me llamo Mirko, aficionado del desarrollo web y la
                    tecnología. Actualmente me especializo como desarrollador
                    Frontend, con experiencia en creación de templates y
                    aplicaciones web, encontrándome en permanente y constante
                    aprendizaje para añadirle el mayor valor a mis proyectos.{" "}
                    <a onClick={openComingModal}>Aquí</a> puedes saber un poco
                    más sobre mí y revisar algunos de mis proyectos.
                  </p>
                </div>
                <ButtonsHome
                  breakpoint={breakpoint}
                  openComingModal={openComingModal}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.5,
              }}
            >
              <div className={classes.home__image}>
                <Animatedlogo />
              </div>
            </motion.div>
          </div>
          <SocialIconsHome breakpoint={breakpoint} />
          <FooterHome />
        </div>
      </PageContainer>
    </section>
  );
}
