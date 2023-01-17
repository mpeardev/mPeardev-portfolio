import { useEffect } from "react";
import classes from "./buttons.module.scss";
import { useButtonSize } from "../../hooks/useButtonSize";

export function Secondary({
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
      className={`theme-button-secondary ${classes.button} ${classes.secondary}`}
      style={styleButton}
      onClick={onClick}
    >
      {children}
      {name}
    </button>
  );
}
