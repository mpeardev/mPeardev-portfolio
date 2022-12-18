import classes from "./titles.module.scss";

export function SecondaryTitle({ title = "title" }) {
  return (
    <div className={classes.title}>
      <h4>{title}</h4>
    </div>
  );
}
