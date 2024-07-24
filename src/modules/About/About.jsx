import { Description, ParticlesBg, Skills } from "./components";
import classes from "./about.module.scss";

export function About() {
  return (
    <div className={classes.about}>
      <ParticlesBg />
      <div className={classes.about__content}>
        <Description />
        <Skills />
      </div>
    </div>
  );
}
