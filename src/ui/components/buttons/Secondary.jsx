import { useEffect } from "react";
import classes from "./buttons.module.scss";
import { useButtonSize } from "../../hooks/useButtonSize";

export function Secondary({
  id = null,
  className = null,
  name = "name",
  size,
  onClick = () => false,
  children,
}) {
  const { styleButton, applyButtonSize } = useButtonSize();

  useEffect(() => {
    applyButtonSize(size);
  }, [size]);

  return (
    <button
      id={id}
      className={`theme-button-secondary theme-button-active ${className} ${classes.button} ${classes.secondary}`}
      style={styleButton}
      onClick={onClick}
    >
      {children}
      {name}
    </button>
  );
}
