import { NavLink } from "react-router-dom";
import classes from "../../organims/Header/header.module.scss";

export function LinksHeader({ show, openComingModal }) {
  return (
    <div
      className={classes.header__links}
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
        {/* <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Sobre mi
        </NavLink> */}
        <a onClick={openComingModal}>Sobre mi</a>
        {/* <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Proyectos
        </NavLink> */}
        <a onClick={openComingModal}>Proyectos</a>
      </div>
    </div>
  );
}
