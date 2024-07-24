import { useEffect } from "react";
import { useButtonSize } from "../../hooks/useButtonSize";
import classes from "./buttons.module.scss";

export function Primary({
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
          className={`theme-button-primary ${classes.button} ${classes.primary}`}
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
          className={`theme-button-primary ${classes.button} ${classes.secondary}`}
          style={styleButton}
        >
          {children}
          {name}
        </a>
      )}
    </>
  );
}
