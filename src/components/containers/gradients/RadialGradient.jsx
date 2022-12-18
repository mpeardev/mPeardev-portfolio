import classes from "./gradients.module.scss";

export function RadialGradient({ children }) {
  return (
    <div className={`${classes.gradient} ${classes.radial}`}>{children}</div>
  );
}
