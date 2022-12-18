import gsap, { Expo } from "gsap";
import { useLayoutEffect, useRef } from "react";
import classes from "../../organims/Header/header.module.scss";
import { AiOutlineMenu } from "../icons";

export function MenuIconHeader({ breakpoint, show, setShow }) {
  const icon = useRef();

  useLayoutEffect(() => {
    gsap.to(icon.current, 3, {
      delay: 8.9,
      opacity: 1,
      ease: Expo.easeInOut,
    });
  }, []);

  return (
    <div
      className={classes.header__menuicon}
      ref={icon}
      style={{
        display: breakpoint <= 640 ? "inline-block" : "none",
        zIndex: "1001",
      }}
      onClick={() => setShow(!show)}
    >
      <div>
        <AiOutlineMenu size="1.5rem" />
      </div>
    </div>
  );
}
