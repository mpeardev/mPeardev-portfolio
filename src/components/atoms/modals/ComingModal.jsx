import { DefaultModal, Subtitle } from "../../../components";
import { CiCircleAlert } from "../icons";

export function ComingModal({ isOpenComingModal, closeComingModal }) {
  return (
    <DefaultModal isOpenModal={isOpenComingModal} closeModal={closeComingModal}>
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
        <Subtitle title="Próximamente" />
      </div>
    </DefaultModal>
  );
}
