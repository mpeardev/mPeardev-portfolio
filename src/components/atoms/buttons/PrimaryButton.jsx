import { useEffect } from "react";
import classes from "./buttons.module.scss";
import { useButtonSize } from "../../../hooks/useButtonSize";

export function PrimaryButton({
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
      className={`${classes.button} ${classes.primary}`}
      style={styleButton}
      onClick={onClick}
    >
      {children}
      {name}
    </button>
  );
}
