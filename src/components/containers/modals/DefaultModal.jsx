import { useEffect } from "react";
import classes from "./modals.module.scss";
import { TfiClose } from "../../atoms/icons";
import { useModalSize } from "../../../hooks/useModalSize";

export function DefaultModal({ children, closeModal, size, title = "" }) {
  const disabledClose = (e) => e.stopPropagation();

  const { styleModal, applyModalSize } = useModalSize();

  useEffect(() => {
    applyModalSize(size);
  }, [size]);

  return (
    <div className={classes.modal} onClick={closeModal}>
      <div
        className={classes.modal__container}
        onClick={disabledClose}
        style={styleModal}
      >
        <h3>{title}</h3>
        <div className={classes.modal__close} onClick={closeModal}>
          <TfiClose />
        </div>
        <div className={classes.modal__content}>{children}</div>
      </div>
    </div>
  );
}
