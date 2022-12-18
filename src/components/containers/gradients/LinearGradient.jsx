import classes from "./gradients.module.scss";

export function LinearGradient({ children }) {
  return (
    <div className={`${classes.gradient} ${classes.linear}`}>{children}</div>
  );
}
