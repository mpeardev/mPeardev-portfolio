import { PageContainer } from "../../../ui/components";
import classes from "../about.module.scss";
import { HobbieCard } from ".";

export function Hobbies() {
  return (
    <div className={classes.about__hobbies}>
      <PageContainer>
        <div className={classes.about__hobbies}>
          <HobbieCard />
        </div>
      </PageContainer>
    </div>
  );
}
