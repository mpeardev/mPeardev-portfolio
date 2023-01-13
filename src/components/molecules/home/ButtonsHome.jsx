import { PrimaryButton, SecondaryButton } from "../../../components";
import classes from "../../organims/Home/home.module.scss";

export function ButtonsHome({ breakpoint, openComingModal }) {
  const onPDFButtonClick = () => {
    fetch("/pdf/Mirko_Peramas_CV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "/Mirko_Peramas_CV.pdf";
        alink.click();
      });
    });
  };

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
            onClick={onPDFButtonClick}
          />
        </div>
      </div>
    </>
  );
}
