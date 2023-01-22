import { useState, useEffect } from "react";
import BreakpointContext, { initialBreakpointState } from "./BreakpointContext";
import { breakpoints } from "../../config/breakpoints";

export const BreakpointProvider = ({ children }) => {
  const [breakpoint, setBreakpoint] = useState(
    initialBreakpointState.breakpoint
  );

  const matchMediaQuery = (breakpoints, onBreakpoint) => {
    for (let key of Object.keys(breakpoints)) {
      if (window.matchMedia(`${breakpoints[key]}`).matches) {
        onBreakpoint(+key);
      }
    }
  };

  const breakpointObserver = (breakpoints, onBreakpoint) => {
    matchMediaQuery(breakpoints, onBreakpoint);

    window.addEventListener("resize", () => {
      matchMediaQuery(breakpoints, onBreakpoint);
    });
  };

  useEffect(() => {
    breakpointObserver(breakpoints, setBreakpoint);
  }, [breakpoint]);

  return (
    <BreakpointContext.Provider value={{ breakpoint, setBreakpoint }}>
      {children}
    </BreakpointContext.Provider>
  );
};
