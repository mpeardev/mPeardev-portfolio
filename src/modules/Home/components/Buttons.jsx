import { Primary, Secondary } from "/src/ui/components";
import classes from "../home.module.scss";
import { useContext } from "react";
import BreakpointContext from "../../../state/breakpoint/BreakpointContext";

export function Buttons({ openComingModal }) {
  const { breakpoint } = useContext(BreakpointContext);

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
          <Primary
            name="Proyectos"
            size={breakpoint >= 1280 ? "xl" : breakpoint >= 768 ? "lg" : "sm"}
            onClick={openComingModal}
          />
        </div>
        <div>
          <Secondary
            name="Descargar CV"
            size={breakpoint >= 1280 ? "xl" : breakpoint >= 768 ? "lg" : "sm"}
            onClick={onPDFButtonClick}
          />
        </div>
      </div>
    </>
  );
}
