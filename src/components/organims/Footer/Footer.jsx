import classes from "./footer.module.scss";
import { Content } from "../../../components";
import { BsLinkedin, BsGithub, BsWhatsapp } from "../../atoms/icons";

export function Footer() {
  return (
    <div className={classes.footer}>
      <Content>
        <div className={classes.footer__top}>
          <img src="/logo/logo-dark.png" alt="logo" />
          <div className={classes.footer__networks}>
            <a
              href="https://www.linkedin.com/in/mirkoperamas/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/mirkoperamas"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsGithub />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=51956000371&text=Hola%20Mirko!%20,%20quiero%20contactarme%20contigo%20para%20..."
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsWhatsapp />
            </a>
          </div>
        </div>
      </Content>
      <hr />
      <Content>
        <p>
          &copy;{new Date().getFullYear()} Todos los derechos reservados |
          mPeardev
        </p>
      </Content>
    </div>
  );
}
