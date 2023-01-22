import { useContext } from "react";
import BreakpointContext from "../../../../state/breakpoint/BreakpointContext";
import classes from "../header.module.scss";

export function MenuIcon({ show, setShow }) {
  const { breakpoint } = useContext(BreakpointContext);

  return (
    <div
      className={classes.header__menuicon}
      style={{
        display: breakpoint <= 640 ? "inline-block" : "none",
        zIndex: "1001",
      }}
      onClick={() => setShow(!show)}
    >
      <button
        className={`theme-button-menu ${show ? classes.styleIconOpen : null}`}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  );
}
