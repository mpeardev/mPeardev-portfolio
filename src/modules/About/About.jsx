import { Description, Hobbies, ParticlesBg } from "./components";
import classes from "./about.module.scss";

export function About() {
  return (
    <div className={`scroll-design ${classes.about}`}>
      <ParticlesBg />
      <div className={classes.about__content}>
        <Description />
        <Hobbies />
      </div>
    </div>
  );
}
