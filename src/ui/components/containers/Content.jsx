import { useContext } from "react";
import BreakpointContext from "../../../state/breakpoint/BreakpointContext";

export function Content({ children }) {
  const { breakpoint } = useContext(BreakpointContext);

  const style = {
    width: "100%",
    maxWidth: "1800px",
    height: "100%",
    margin: "0 auto",
    padding: breakpoint <= 640 ? "0 4%" : "0 2%",
  };

  return <div style={style}>{children}</div>;
}
