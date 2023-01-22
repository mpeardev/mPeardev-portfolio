import { useModal } from "./hooks/useModal";
import { Header, ComingModal } from "./ui/components/";
import { AppRouter } from "./routers/AppRouter";

export function MPeardevApp() {
  const [isOpenComingModal, openComingModal, closeComingModal] = useModal();

  return (
    <div className="theme-main">
      <Header openComingModal={openComingModal} />
      <AppRouter openComingModal={openComingModal} />

      {isOpenComingModal && (
        <ComingModal
          isOpenComingModal={isOpenComingModal}
          closeComingModal={closeComingModal}
        />
      )}
    </div>
  );
}
