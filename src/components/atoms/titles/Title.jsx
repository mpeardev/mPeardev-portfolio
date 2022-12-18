import classes from "./titles.module.scss";

export function Title({ title = "title", size = "auto" }) {
  return (
    <div className={classes.title}>
      <h1 style={{ fontSize: size }}>{title}</h1>
    </div>
  );
}
