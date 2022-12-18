import classes from "./home.module.scss";
import {
  Content,
  PageContainer,
  Title,
  SecondaryTitle,
  Loader,
  FooterHome,
  ButtonsHome,
  SocialIconsHome,
} from "../../../components";

import gsap, { Expo } from "gsap";
import { useLayoutEffect, useRef } from "react";

export function Home({ breakpoint }) {
  const title = useRef();
  const subtitle = useRef();
  const p1 = useRef();

  useLayoutEffect(() => {
    // Title
    gsap.from(title.current, 3, {
      delay: 8.6,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });

    // subtitle
    gsap.from(subtitle.current, 3, {
      delay: 8.8,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });

    // p1
    gsap.from(p1.current, 3, {
      delay: 9,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });
  }, []);

  return (
    <section className={classes.home}>
      <Loader breakpoint={breakpoint} />
      <PageContainer>
        <Content>
          <div className={classes.home__content}>
            <div className={classes.home__main}>
              <div className={classes.home__about}>
                <div ref={title}>
                  <Title
                    title={"mPeardev"}
                    size={breakpoint >= 1280 ? "80px" : "60px"}
                  />
                </div>
                <div ref={subtitle}>
                  <SecondaryTitle title={"software developer"} />
                </div>
                <div className={classes.home__aboutResume}>
                  <p ref={p1}>
                    Hola! me llamo Mirko, aficionado del desarrollo web y la
                    tecnología. Actualmente me especializo como desarrollador
                    Frontend, con experiencia en creación de templates y
                    aplicaciones web, encontrándome en permanente y constante
                    aprendizaje para añadirle el mayor valor a mis proyectos.{" "}
                    <a>Aquí</a> puedes saber un poco más sobre mí y revisar
                    algunos de mis proyectos.
                  </p>
                </div>
                <ButtonsHome breakpoint={breakpoint} />
              </div>
            </div>
            <SocialIconsHome breakpoint={breakpoint} />
            <FooterHome />
          </div>
        </Content>
      </PageContainer>
    </section>
  );
}
