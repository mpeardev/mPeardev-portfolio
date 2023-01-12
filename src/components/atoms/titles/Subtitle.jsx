import classes from "./titles.module.scss";

export function Subtitle({ title = "title" }) {
  return (
    <div className={classes.title}>
      <h3>{title}</h3>
    </div>
  );
}
