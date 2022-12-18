import classes from "./titles.module.scss";

export function Subtitle({ subtitle = "subtitle" }) {
  return (
    <div className={classes.title}>
      <h2>{subtitle}</h2>
    </div>
  );
}
