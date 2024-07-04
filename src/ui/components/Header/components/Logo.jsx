import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../../../state/theme/ThemeContext";
import { motion } from "framer-motion";
import BreakpointContext from "../../../../state/breakpoint/BreakpointContext";

export function Logo() {
  const { breakpoint } = useContext(BreakpointContext);
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      initial={{
        y: -200,
      }}
      animate={{
        y: 0,
        transition: { type: "spring", duration: 1.5, delay: 0.1 },
      }}
    >
      <Link to="/">
        {breakpoint <= 640 && (
          <img
            src={
              theme === "dark"
                ? "/img/icon/200x200/icon-dark.png"
                : theme === "light"
                ? "/img/icon/200x200/icon.png"
                : "/img/icon/200x200/icon.png"
            }
            alt="logo"
            style={{ width: "3rem" }}
          />
        )}
        {breakpoint >= 641 && (
          <img
            src={
              theme === "dark"
                ? "/img/logo/logo-dark.png"
                : theme === "light"
                ? "/img/logo/logo.png"
                : "/img/logo/logo.png"
            }
            alt="logo"
            style={{ width: "10rem" }}
          />
        )}
      </Link>
    </motion.div>
  );
}
