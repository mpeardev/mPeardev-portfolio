import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Content } from "../../containers/Content/Content";
import { PageContainer } from "../../containers/PageContainer";
import classes from "../../organims/Gsap/gsap.module.scss";

function Box({ children }) {
  return <div className={classes.box}>{children}</div>;
}

function Circle({ children }) {
  return <div className={classes.circle}>{children}</div>;
}

export function GsapThree() {
  const [reversed, setReversed] = useState(false);
  const app = useRef();
  // store the timeline in a ref.
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // add a box and circle animation to our timeline and play on first render
      console.log("creating timeline");
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap
        .timeline()
        .to(`.${classes.box}`, {
          rotation: 360,
        })
        .to(`.${classes.circle}`, {
          x: 100,
        });
    }, app);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // toggle the direction of our timeline
    console.log("toggling reverse to", reversed);
    tl.current.reversed(reversed);
  }, [reversed]);

  return (
    <PageContainer>
      <Content>
        <h1>Creación y control de líneas de tiempo</h1>
        <div className="app" ref={app}>
          <div>
            <button onClick={() => setReversed(!reversed)}>Toggle</button>
          </div>
          <Box>box</Box>
          <Circle>circle</Circle>
        </div>
      </Content>
    </PageContainer>
  );
}
