import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Content } from "../../containers/Content/Content";
import { PageContainer } from "../../containers/PageContainer";

const randomX = gsap.utils.random(-200, 200, 1, true);

function Box({ children, endX }) {
  const boxRef = useRef();
  const ctx = useRef();

  useEffect(() => {
    ctx.current = gsap.context(() => {}); // nothing initially (we'll add() to the context when endX changes)
    return () => ctx.current.revert();
  }, [ctx]);

  // run when `endX` changes
  useEffect(() => {
    ctx.current.add(() => {
      gsap.to(boxRef.current, {
        x: endX,
      });
    });
  }, [endX]);

  return (
    <div className="box" ref={boxRef}>
      {children}
    </div>
  );
}

export function GsapFive() {
  const [endX, setEndX] = useState(0);

  return (
    <PageContainer>
      <Content>
        <div className="app">
          <button onClick={() => setEndX(randomX())}>
            Pass in a randomized value
          </button>
          <Box endX={endX}>{endX}</Box>
        </div>
      </Content>
    </PageContainer>
  );
}
