import { useState } from "react";
import { buttonSize } from "../config/buttonSize";

export function useButtonSize() {
  const [styleButton, setStyleButton] = useState();

  const applyButtonSize = (size) => {
    switch (size) {
      case "sm":
        setStyleButton(buttonSize.sm);
        break;
      case "lg":
        setStyleButton(buttonSize.lg);
        break;
      case "xl":
        setStyleButton(buttonSize.xl);
        break;
      default:
        setStyleButton(buttonSize.lg);
    }
  };

  return { styleButton, applyButtonSize };
}
