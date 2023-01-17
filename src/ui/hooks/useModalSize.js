import { useState } from "react";
import { modalSize } from "/src/config/modalSize";

export function useModalSize() {
  const [styleModal, setStyleModal] = useState();

  const applyModalSize = (size) => {
    switch (size) {
      case "sm":
        setStyleModal(modalSize.sm);
        break;
      case "lg":
        setStyleModal(modalSize.lg);
        break;
      case "xl":
        setStyleModal(modalSize.xl);
        break;
      default:
        setStyleModal(modalSize.lg);
    }
  };

  return { styleModal, applyModalSize };
}
