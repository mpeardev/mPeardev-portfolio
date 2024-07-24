import { Primary, Secondary } from "/src/ui/components";
import classes from "../home.module.scss";
import { useContext } from "react";
import BreakpointContext from "../../../state/breakpoint/BreakpointContext";
import { useNavigate } from "react-router-dom";

export function Buttons() {
  const { breakpoint } = useContext(BreakpointContext);
  const navigate = useNavigate();

  return (
    <>
      <div className={classes.home__aboutButtons}>
        <div>
          <Primary
            name="Proyectos"
            size={breakpoint >= 1280 ? "xl" : breakpoint >= 768 ? "lg" : "sm"}
            onClick={() => navigate("/projects")}
          />
        </div>
        <div>
          <Secondary
            name="Descargar CV"
            size={breakpoint >= 1280 ? "xl" : breakpoint >= 768 ? "lg" : "sm"}
            href="https://firebasestorage.googleapis.com/v0/b/mpeardev-portfolio.appspot.com/o/Mirko_Peramas_CV.pdf?alt=media&token=945be9d1-ee43-4d9c-97a7-8e057531c64a"
          />
        </div>
      </div>
    </>
  );
}
