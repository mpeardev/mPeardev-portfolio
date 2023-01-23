import { ParticlesBg } from "./components";
import { PageContainer } from "../../ui/components";
import classes from "./about.module.scss";

export function About() {
  return (
    <div className={classes.about}>
      <PageContainer>
        <ParticlesBg />
      </PageContainer>
    </div>
  );
}
