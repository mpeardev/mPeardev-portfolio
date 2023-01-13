import { PrimaryButton, SecondaryButton } from "../../../components";
import classes from "../../organims/Home/home.module.scss";

export function ButtonsHome({ breakpoint, openComingModal }) {
  return (
    <>
      <div className={classes.home__aboutButtons}>
        <div>
          <PrimaryButton
            name="Proyectos"
            size={breakpoint >= 1280 ? "xl" : breakpoint >= 768 ? "lg" : "sm"}
            onClick={openComingModal}
          />
        </div>
        <div>
          <SecondaryButton
            name="Descargar CV"
            size={breakpoint >= 1280 ? "xl" : breakpoint >= 768 ? "lg" : "sm"}
            onClick={openComingModal}
          />
        </div>
      </div>
    </>
  );
}
