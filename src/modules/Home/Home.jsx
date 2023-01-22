import classes from "./home.module.scss";
import { PageContainer, Content } from "/src/ui/components";
import { Animatedlogo, SocialIcons, Footer, Resume } from "./components";

export function Home() {
  return (
    <div className={classes.home}>
      <PageContainer>
        <div className={classes.home__content}>
          <Content>
            <main className={classes.home__main}>
              <Resume />
              <div className={classes.home__image}>
                <Animatedlogo />
              </div>
            </main>
          </Content>
        </div>
        <SocialIcons />
        <Footer />
      </PageContainer>
    </div>
  );
}
