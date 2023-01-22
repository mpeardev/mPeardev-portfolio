import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "../header.module.scss";
import { useContext } from "react";
import BreakpointContext from "../../../../state/breakpoint/BreakpointContext";

export function Links({ show, openComingModal }) {
  const { breakpoint } = useContext(BreakpointContext);

  return (
    <motion.div
      initial={{
        y: -200,
      }}
      animate={{
        y: 0,
        transition: { type: "spring", duration: 1.5, delay: 0.2 },
      }}
      className={`${breakpoint <= 640 ? "theme-menu-bg" : ""} ${
        classes.header__links
      }`}
      style={{
        top: show ? "5rem" : "-100vh",
      }}
    >
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "theme-link-active" : "")}
        >
          Home
        </NavLink>
        {/* <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "theme-link-active" : "")}
        >
          Sobre mi
        </NavLink> */}
        <a onClick={openComingModal}>Sobre mi</a>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "theme-link-active" : "")}
        >
          Proyectos
        </NavLink>
      </div>
    </motion.div>
  );
}
