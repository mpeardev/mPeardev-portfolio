import classes from "./titles.module.scss";

export function Title({ title = "title", size = "auto", children }) {
  return (
    <div className={classes.title}>
      <h1 style={{ fontSize: size }}>{(title, children)}</h1>
    </div>
  );
}
