import { useRef } from "react";
import classes from "./toggle-mode.module.scss";

export function ToggleMode({ openComingModal }) {
  const check = useRef(null);

  /* Capture default color mode
    checked === true: dark
    checked === false: light
  */

  // modify
  const handleCheck = () => {
    !check.current.checked;
  };

  return (
    <div className={classes.toggle}>
      <input
        type="checkbox"
        id="toggle"
        ref={check}
        checked={true}
        onChange={handleCheck}
      />
      <label htmlFor="toggle" onClick={openComingModal}></label>
    </div>
  );
}
