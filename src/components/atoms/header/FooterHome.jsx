import gsap, { Expo } from "gsap";
import { useLayoutEffect, useRef } from "react";
import classes from "../../organims/Home/home.module.scss";

export function FooterHome() {
  const name = useRef();
  const copyright = useRef();

  useLayoutEffect(() => {
    gsap.from(name.current, 3, {
      delay: 8.7,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });
    gsap.from(copyright.current, 3, {
      delay: 8.9,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });
  }, []);

  return (
    <div className={classes.home__footer}>
      <p ref={name}>Mirko Peramas | mPeardev</p>
      <p ref={copyright}>
        &copy;{new Date().getFullYear()} All rights reserved
      </p>
    </div>
  );
}
