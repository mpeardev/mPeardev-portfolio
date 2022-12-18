import classes from "./content.module.scss";

export function Content({ children }) {
  return <div className={classes.content}>{children}</div>;
}
