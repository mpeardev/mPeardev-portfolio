import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import classes from "./header.module.scss";
import { Logo, Links, ToggleMode, Player, MenuIcon } from "./components";
import BreakpointContext from "../../../state/breakpoint/BreakpointContext";

export function Header({ openComingModal }) {
  const [show, setShow] = useState();
  const { breakpoint } = useContext(BreakpointContext);

  useEffect(() => {
    if (breakpoint > 640) {
      setShow(false);
    }
  }, [breakpoint]);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.header__container}>
          <Logo />

          <Links show={show} openComingModal={openComingModal} />

          <motion.div
            initial={{
              y: -200,
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.3 },
            }}
          >
            <div className={classes.header__options}>
              <ToggleMode />
              <Player />
              <MenuIcon show={show} setShow={setShow} />
            </div>
          </motion.div>
        </div>
      </header>
    </>
  );
}
