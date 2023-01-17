import { Default } from "../containers/modals/Default";
import { CiCircleAlert } from "/src/ui/icons";
import { Subtitle } from "/src/ui/components";

export function ComingModal({ isOpenComingModal, closeComingModal }) {
  return (
    <Default isOpenModal={isOpenComingModal} closeModal={closeComingModal}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <CiCircleAlert size={"4em"} color={"#fff"} />
        <Subtitle title="actualizando..." />
      </div>
    </Default>
  );
}
