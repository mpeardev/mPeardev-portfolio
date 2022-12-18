import gsap, { Expo } from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import classes from "../../organims/Header/header.module.scss";

export function LinksHeader({ show, breakpoint }) {
  const links = useRef();

  useLayoutEffect(() => {
    gsap.to(links.current, 3, {
      delay: 8.5,
      opacity: 1,
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
