import { useEffect } from "react";
import { useButtonSize } from "../../hooks/useButtonSize";
import classes from "./buttons.module.scss";

export function Primary({
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
      className={`theme-button-primary ${classes.button} ${classes.primary}`}
      style={styleButton}
      onClick={onClick}
    >
      {children}
      {name}
    </button>
  );
}
