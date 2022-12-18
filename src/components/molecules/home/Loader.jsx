import { Expo } from "gsap";
import gsap, { TimelineMax } from "gsap/gsap-core";
import { useEffect, useLayoutEffect, useRef } from "react";

export function Loader({ breakpoint }) {
  const frame = useRef();
  const circle1 = useRef();
  const circle2 = useRef();

  useLayoutEffect(() => {
    const x = new TimelineMax();
    // frame
    x.to(frame.current, 4, {
      delay: 6.6,
      top: "-100vh",
      ease: Expo.easeInOut,
    }).to(frame.current, 4, {
      display: "none",
    });

    // circles
    let t1 = new TimelineMax();

    t1.from(circle1.current, 4, {
      delay: 0.4,
      opacity: 0,
      y: "50%",
      ease: Expo.easeInOut,
    })
      .from(
        circle2.current,
        4,
        {
          delay: 0.9,
          opacity: 0,
          y: "50%",
          ease: Expo.easeInOut,
        },
        "-=5"
      )
      .to(circle1.current, 4, {
        delay: 0.4,
        x: "100%",
        scale: breakpoint <= 768 ? 4 : 1.2,
        ease: Expo.easeInOut,
      })
      .to(
        circle2.current,
        4,
        {
          delay: 0.9,
          x: "100%",
          scale: breakpoint <= 768 ? 4 : 1.2,
          ease: Expo.easeInOut,
        },
        "-=5"
      );
  }, []);
  return (
    <>
      <div className="loading-screen" ref={frame}></div>
      <div className="loader">
        <div className="ringOne ring" ref={circle1}>
          <img src="/ring2.png" alt="" />
        </div>
        <div className="ringTwo ring" ref={circle2}>
          <img src="/ring2.png" alt="" />
        </div>
      </div>
    </>
  );
}
