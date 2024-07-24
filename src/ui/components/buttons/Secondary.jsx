import { useEffect } from "react";
import classes from "./buttons.module.scss";
import { useButtonSize } from "../../hooks/useButtonSize";

export function Secondary({
  name = "name",
  size,
  onClick = () => false,
  href = null,
  children,
}) {
  const { styleButton, applyButtonSize } = useButtonSize();

  useEffect(() => {
    applyButtonSize(size);
  }, [size]);

  return (
    <>
      {!href && (
        <button
          className={`theme-button-secondary ${classes.button} ${classes.secondary}`}
          style={styleButton}
          onClick={onClick}
        >
          {children}
          {name}
        </button>
      )}
      {href && (
        <a
          href={href}
          target="_blank"
          className={`theme-button-secondary ${classes.button} ${classes.secondary}`}
          style={styleButton}
        >
          {children}
          {name}
        </a>
      )}
    </>
  );
}
