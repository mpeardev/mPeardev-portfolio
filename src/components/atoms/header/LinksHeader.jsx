import gsap, { Expo } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import classes from "../../organims/Header/header.module.scss";

export function LinksHeader({ show }) {
  const links = useRef();

  useLayoutEffect(() => {
    gsap.from(links.current, 3, {
      delay: 8.5,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });
  }, []);

  return (
    <div
      className={classes.header__links}
      ref={links}
      style={{
        top: show ? "5rem" : "-100vh",
      }}
    >
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Home
        </NavLink>
        <a>Sobre mi</a>
        <a>Proyectos</a>
      </div>
    </div>
  );
}
