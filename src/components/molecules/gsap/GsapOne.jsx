import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Content } from "../../containers/Content/Content";
import { PageContainer } from "../../containers/PageContainer";
import classes from "../../organims/Gsap/gsap.module.scss";

export function GsapOne() {
  const app = useRef();
  const circle = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.to(".box", { rotation: 360 });
      // or refs
      gsap.to(circle.current, { rotation: 360 });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <PageContainer>
      <Content>
        <h1>Orientación de elementos con referencias</h1>
        <div ref={app}>
          <div className="box">selector</div>
          <div className={classes.circle} ref={circle}>
            Ref
          </div>
        </div>
      </Content>
    </PageContainer>
  );
}
