import gsap, { Expo } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

export function LogoHeader({ breakpoint }) {
  const logo = useRef();

  useLayoutEffect(() => {
    gsap.from(logo.current, 3, {
      delay: 8.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });
  }, []);

  return (
    <div ref={logo}>
      <Link to="/">
        {breakpoint <= 640 && (
          <img
            src="/icon/200x200/icon-dark.png"
            alt="logo"
            style={{ width: "3rem" }}
          />
        )}
        {breakpoint <= 1024 && breakpoint > 640 && (
          <img
            src="/logo/logo-notebook-dark.png"
            alt="logo"
            style={{ width: "7rem" }}
          />
        )}
        {breakpoint >= 1280 && (
          <img
            src="/logo/logo-dark.png"
            alt="logo"
            style={{ width: "10rem" }}
          />
        )}
      </Link>
    </div>
  );
}
