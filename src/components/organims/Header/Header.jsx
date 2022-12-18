import { useEffect, useState } from "react";
import classes from "./header.module.scss";
import {
  LogoHeader,
  LinksHeader,
  MenuIconHeader,
  ToggleMode,
  Player,
  Content,
} from "../../../components";

export function Header({ breakpoint }) {
  const [show, setShow] = useState();

  useEffect(() => {
    if (breakpoint > 640) {
      setShow(false);
    }
  }, [breakpoint]);

  return (
    <header className={classes.header}>
      <Content>
        <div className={classes.header__container}>
          <LogoHeader breakpoint={breakpoint} />
          <LinksHeader show={show} />
          <div className={classes.header__options}>
            <ToggleMode />
            <Player />
          </div>
          <MenuIconHeader
            breakpoint={breakpoint}
            show={show}
            setShow={setShow}
          />
        </div>
      </Content>
    </header>
  );
}
