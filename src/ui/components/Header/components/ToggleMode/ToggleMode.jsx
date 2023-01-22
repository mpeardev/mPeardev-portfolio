import { useContext, useEffect, useRef } from "react";
import ThemeContext from "../../../../../state/theme/ThemeContext";
import classes from "./toggle-mode.module.scss";

export function ToggleMode() {
  const { theme, setTheme } = useContext(ThemeContext);
  const check = useRef(null);

  const verifyChecked = () => {
    if (check.current.checked === !true) {
      setTheme("dark");
    }
    if (check.current.checked === !false) {
      setTheme("light");
    }
  };

  const handleCheck = () => {
    !check.current.checked;
    verifyChecked();
  };

  useEffect(() => {
    if (check) {
      if (theme === "light") {
        check.current.checked = false;
      }
      if (theme === "dark") {
        check.current.checked = true;
      }
    }
  }, []);

  return (
    <div className={classes.toggle}>
      <input type="checkbox" id="toggle" ref={check} />
      <label htmlFor="toggle" onClick={handleCheck}></label>
    </div>
  );
}
