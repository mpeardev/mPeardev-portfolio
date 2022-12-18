import { DefaultModal } from "../../../components";

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
        }}
      >
        <h1>Proximamente</h1>
      </div>
    </DefaultModal>
  );
}
