import gsap, { Expo } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import classes from "./toggle-mode.module.scss";

export function ToggleMode() {
  const toggle = useRef();
  const check = useRef(null);

  const [state, setState] = useState();

  useLayoutEffect(() => {
    gsap.from(toggle.current, 3, {
      delay: 8.6,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });
  }, []);

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
    <div className={classes.toggle} ref={toggle}>
      <input type="checkbox" id="toggle" ref={check} />
      <label htmlFor="toggle" onClick={handleCheck}></label>
    </div>
  );
}
