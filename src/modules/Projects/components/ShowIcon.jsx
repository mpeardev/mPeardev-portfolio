import { MdDoubleArrow } from "/src/ui/icons";
import classes from "../projects.module.scss";

export function ShowIcon({ onClick = () => false }) {
  return (
    <div className={classes.showicon}>
      <a className="theme-blur-bg" onClick={onClick}>
        <MdDoubleArrow size="1.5em" />
      </a>
    </div>
  );
}
