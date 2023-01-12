import { useEffect, useState } from "react";
import { disableScroll, enableScroll } from "./enableDisableScroll";

export function useModal(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  useEffect(() => {
    if (isOpen) disableScroll();
    else enableScroll();
  }, [isOpen]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal];
}
