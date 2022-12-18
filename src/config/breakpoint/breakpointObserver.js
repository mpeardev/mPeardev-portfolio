const matchMediaQuery = (breakpoints, setBreakpoint) => {
  for (let key of Object.keys(breakpoints)) {
    if (window.matchMedia(`${breakpoints[key]}`).matches) {
      setBreakpoint(+key);
    }
  }
};

export const breakpointObserver = (breakpoints, setBreakpoint) => {
  matchMediaQuery(breakpoints, setBreakpoint);

  window.addEventListener("resize", () => {
    matchMediaQuery(breakpoints, setBreakpoint);
  });
};
