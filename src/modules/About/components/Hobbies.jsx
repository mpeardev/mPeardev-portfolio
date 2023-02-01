import { Content, PageContainer } from "/src/ui/components";
import classes from "../about.module.scss";
import { HobbieCard, SubtitlesAbout } from ".";
import { useContext } from "react";
import DataContext from "../../../state/data/DataContext";

export function Hobbies() {
  const { data } = useContext(DataContext);

  return (
    <div className={classes.about__hobbies}>
      <PageContainer>
        <Content>
          <SubtitlesAbout name={"hobbies"} />
          <div className={classes.about__hobbiesCards}>
            {data.hobbies?.map((hobbie, i) => {
              return (
                <div key={i}>
                  <HobbieCard
                    title={hobbie.title}
                    description={hobbie.description}
                    image={hobbie.image}
                    index={i}
                  />
                </div>
              );
            })}
          </div>
        </Content>
      </PageContainer>
    </div>
  );
}
