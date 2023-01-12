import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import classes from "./header.module.scss";
import {
  LogoHeader,
  LinksHeader,
  MenuIconHeader,
  ToggleMode,
  Player,
  ComingModal,
} from "../../../components";
import { useModal } from "../../../hooks/useModal";

export function Header({ breakpoint }) {
  const [show, setShow] = useState();
  const [isOpenComingModal, openComingModal, closeComingModal] = useModal();

  useEffect(() => {
    if (breakpoint > 640) {
      setShow(false);
    }
  }, [breakpoint]);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.header__container}>
          <motion.div
            initial={{
              y: -200,
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.3 },
            }}
          >
            <LogoHeader breakpoint={breakpoint} />
          </motion.div>

          <motion.div
            initial={{
              y: -200,
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.4 },
            }}
          >
            <LinksHeader
              show={show}
              breakpoint={breakpoint}
              openComingModal={openComingModal}
            />
          </motion.div>

          <motion.div
            initial={{
              y: -200,
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.5 },
            }}
          >
            <div className={classes.header__options}>
              <ToggleMode openComingModal={openComingModal} />
              <Player openComingModal={openComingModal} />
              <MenuIconHeader
                breakpoint={breakpoint}
                show={show}
                setShow={setShow}
              />
            </div>
          </motion.div>
        </div>
      </header>
      {isOpenComingModal && (
        <ComingModal
          isOpenComingModal={isOpenComingModal}
          closeComingModal={closeComingModal}
        />
      )}
    </>
  );
}
