import gsap, { Expo } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { PrimaryButton, SecondaryButton } from "../../../components";
import classes from "../../organims/Home/home.module.scss";

export function ButtonsHome({ breakpoint }) {
  const buttonOne = useRef();
  const buttonTwo = useRef();

  useLayoutEffect(() => {
    gsap.from(buttonOne.current, 3, {
      delay: 9.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });

    gsap.from(buttonTwo.current, 3, {
      delay: 9.7,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });
  }, []);

  return (
    <div className={classes.home__aboutButtons}>
      <div ref={buttonOne}>
        <PrimaryButton
          name="Proyectos"
          size={breakpoint >= 1280 ? "xl" : breakpoint >= 768 ? "lg" : "sm"}
        />
      </div>
      <div ref={buttonTwo}>
        <SecondaryButton
          name="Descargar CV"
          size={breakpoint >= 1280 ? "xl" : breakpoint >= 768 ? "lg" : "sm"}
        />
      </div>
    </div>
  );
}
