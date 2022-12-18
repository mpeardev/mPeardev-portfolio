import { useEffect, useState } from "react";
import { Footer, Gsap, Header } from "./components";
import { breakpointObserver } from "./config/breakpoint/breakpointObserver";
import { breakpoints } from "./config/breakpoint/breakpoints";
import { AppRouter } from "./routers/AppRouter";

export function MPeardevApp() {
  const [breakpoint, isBreakpoint] = useState();

  useEffect(() => {
    breakpointObserver(breakpoints, isBreakpoint);
  }, [breakpoint]);
  return (
    <>
      <Header breakpoint={breakpoint} />
      <AppRouter breakpoint={breakpoint} />
    </>
  );
}
