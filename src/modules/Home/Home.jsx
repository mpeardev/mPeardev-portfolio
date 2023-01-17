import classes from "./home.module.scss";
import { PageContainer } from "/src/ui/components";
import { Animatedlogo, SocialIcons, Footer, Resume } from "./components";

export function Home({ breakpoint, openComingModal }) {
  return (
    <section className={classes.home}>
      <PageContainer>
        <div className={classes.home__content}>
          <div className={classes.home__main}>
            <Resume breakpoint={breakpoint} openComingModal={openComingModal} />
            <div className={classes.home__image}>
              <Animatedlogo />
            </div>
          </div>
        </div>
        <SocialIcons breakpoint={breakpoint} />
        <Footer />
      </PageContainer>
    </section>
  );
}
