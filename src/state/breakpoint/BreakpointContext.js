import { createContext } from "react";

export const initialBreakpointState = {
  breakpoint: null,
  setBreakpoint: () => null,
};

const BreakpointContext = createContext(initialBreakpointState);
export default BreakpointContext;
