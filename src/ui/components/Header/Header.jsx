import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import classes from "./header.module.scss";
import { Logo, Links, ToggleMode, Player, MenuIcon } from "./components";
import BreakpointContext from "../../../state/breakpoint/BreakpointContext";
import { disableScroll, enableScroll } from "/src/helpers/enableDisableScroll";

export function Header() {
  const [show, setShow] = useState();
  const { breakpoint } = useContext(BreakpointContext);

  useEffect(() => {
    if (show) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [show]);

  useEffect(() => {
    if (breakpoint > 640) {
      setShow(false);
    }
  }, [breakpoint]);

  const variants = {
    hidden: {
      y: -200,
    },
    visible: {
      y: 0,
      transition: { type: "spring", duration: 1.5, delay: 0.3 },
    },
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__container}>
        <Logo />

        <Links show={show} setShow={setShow} />

        <motion.div initial="hidden" animate="visible" variants={variants}>
          <div className={classes.header__options}>
            <ToggleMode />
            <Player />
            <MenuIcon show={show} setShow={setShow} />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
