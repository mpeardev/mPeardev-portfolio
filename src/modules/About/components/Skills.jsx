import { Content, PageContainer } from "/src/ui/components";
import classes from "../about.module.scss";
import { SubtitlesAbout, SkillsImages } from ".";

export function Skills() {
  return (
    <div className={classes.about__skills}>
      <PageContainer>
        <SubtitlesAbout name={"skills"} />
        <SkillsImages />
      </PageContainer>
    </div>
  );
}
