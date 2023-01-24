import classes from "../about.module.scss";

export function HobbieCard() {
  return (
    <div className={classes.about__hobbiesCard}>
      <div className={classes.about__hobbiesImage}></div>
      <div className={classes.about__hobbiesDescription}>
        <p>
          Uno de mis hobbies favoritos es jugar futbol. Suelo practicarlo con
          mis familiares y amigos.
        </p>
      </div>
    </div>
  );
}
