import classes from "../../organims/Header/header.module.scss";
import { AiOutlineMenu } from "../icons";

export function MenuIconHeader({ breakpoint, show, setShow }) {
  return (
    <div
      className={classes.header__menuicon}
      style={{ display: breakpoint <= 640 ? "inline-block" : "none" }}
      onClick={() => setShow(!show)}
    >
      <div>
        <AiOutlineMenu size="1.5rem" />
      </div>
    </div>
  );
}
