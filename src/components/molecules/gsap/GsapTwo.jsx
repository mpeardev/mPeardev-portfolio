import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Content } from "../../containers/Content/Content";
import { PageContainer } from "../../containers/PageContainer";
import classes from "../../organims/Gsap/gsap.module.scss";

const Box = ({ children, className, anim }) => {
  return (
    <div className={`${classes.box} ` + className} data-animate={anim}>
      {children}
    </div>
  );
};

export function GsapTwo() {
  const app = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Target the two specific elements we have asigned the animate class
      gsap.to("[data-animate='rotate']", {
        rotation: 360,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });

      gsap.to("[data-animate='move']", {
        x: 100,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });

      gsap.set(".dont-animate", {
        backgroundColor: "red",
      });
    }, app); // <- scope

    return () => ctx.revert();
  }, []);

  return (
    <PageContainer>
      <Content>
        <h1>Reutilización de componentes</h1>
        <div ref={app}>
          <Box anim="rotate">Box</Box>
          <Box className="dont-animate">Don't Animate Me</Box>
          <Box anim="move">Box</Box>
        </div>
      </Content>
    </PageContainer>
  );
}
