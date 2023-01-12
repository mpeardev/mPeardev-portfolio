import { Home, ComingModal } from "../../components";
import { useModal } from "../../hooks/useModal";

export function HomePage({ breakpoint }) {
  const [isOpenComingModal, openComingModal, closeComingModal] = useModal();

  return (
    <>
      <div>
        <Home
          breakpoint={breakpoint}
          isOpenModal={isOpenComingModal}
          openComingModal={openComingModal}
        />
      </div>
      {isOpenComingModal && (
        <ComingModal
          isOpenComingModal={isOpenComingModal}
          closeComingModal={closeComingModal}
        />
      )}
    </>
  );
}
