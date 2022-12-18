import gsap, { Power3 } from "gsap";
import { useLayoutEffect, useRef } from "react";
import classes from "../../organims/Home/home.module.scss";
import { BsLinkedin, BsGithub, BsWhatsapp } from "../../atoms/icons";
import { Content } from "../../containers/Content/Content";

export function SocialIconsHome({ breakpoint }) {
  const social = useRef();

  useLayoutEffect(() => {
    gsap.from(
      social.current,
      2,
      {
        delay: 8.7,
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut,
      },
      0.1
    );
  }, []);

  return (
    <div className={classes.home__social} ref={social}>
      <a
        href="https://www.linkedin.com/in/mirkoperamas/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <BsLinkedin size={breakpoint >= 768 ? "1.5rem" : "1.2rem"} />
      </a>
      <a
        href="https://github.com/mirkoperamas"
        target="_blank"
        rel="noreferrer noopener"
      >
        <BsGithub size={breakpoint >= 768 ? "1.5rem" : "1.2rem"} />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=51956000371&text=Hola%20Mirko!%20,%20quiero%20contactarme%20contigo%20para%20..."
        target="_blank"
        rel="noreferrer noopener"
      >
        <BsWhatsapp size={breakpoint >= 768 ? "1.5rem" : "1.2rem"} />
      </a>
    </div>
  );
}
