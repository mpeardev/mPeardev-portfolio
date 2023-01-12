import { useEffect, useRef, useState } from "react";
import classes from "./toggle-mode.module.scss";

export function ToggleMode({ openComingModal }) {
  const check = useRef(null);
  const [state, setState] = useState();

  /* Capture default color mode
    checked === true: dark
    checked === false: light
  */
  useEffect(() => {
    check.current.checked = true;
    const x = check.current.checked;
    setState(x);
  }, []);

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  // modify
  const handleCheck = () => {
    setState(!state);
  };

  return (
    <div className={classes.toggle}>
      <input type="checkbox" id="toggle" ref={check} />
      {/* <label htmlFor="toggle" onClick={handleCheck}></label> */}
      <label htmlFor="toggle" onClick={openComingModal}></label>
    </div>
  );
}
