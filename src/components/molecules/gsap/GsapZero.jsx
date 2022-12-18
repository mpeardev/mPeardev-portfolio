import gsap from "gsap";
import { PageContainer, Content } from "../../../components";
import classes from "../../organims/Gsap/gsap.module.scss";

export function GsapZero() {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
  };

  return (
    <PageContainer>
      <Content>
        <h1>Animación en la interacción</h1>
        <div>
          <div
            className={classes.box}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            Hover Me
          </div>
        </div>
      </Content>
    </PageContainer>
  );
}
