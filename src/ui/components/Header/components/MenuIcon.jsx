import classes from "../header.module.scss";
import { AiOutlineMenu } from "/src/ui/icons";

export function MenuIcon({ breakpoint, show, setShow }) {
  return (
    <div
      className={classes.header__menuicon}
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
