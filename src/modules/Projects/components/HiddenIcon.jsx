import { MdDoubleArrow } from "/src/ui/icons";
import classes from "../projects.module.scss";

export function HiddenIcon({ onClick = () => false }) {
  return (
    <a className={classes.hiddenicon} onClick={onClick}>
      <MdDoubleArrow size="1.5em" />
    </a>
  );
}
