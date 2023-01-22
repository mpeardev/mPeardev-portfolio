import classes from "./titles.module.scss";

export function Title({ title = "title", size = "auto", children }) {
  return (
    <>
      {children && (
        <div className={classes.title}>
          <h1 style={{ fontSize: size, lineHeight: size }}>
            {(title, children)}
          </h1>
        </div>
      )}
      {!children && (
        <div className={classes.title}>
          <h1 style={{ fontSize: size, lineHeight: size }}>{title}</h1>
        </div>
      )}
    </>
  );
}
