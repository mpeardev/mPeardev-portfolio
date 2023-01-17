import { useEffect, useState } from "react";
import { breakpointObserver } from "./config/breakpoint/breakpointObserver";
import { breakpoints } from "./config/breakpoint/breakpoints";
import { useModal } from "./hooks/useModal";
import { Header, ComingModal } from "./ui/components/";
import { AppRouter } from "./routers/AppRouter";

export function MPeardevApp() {
  const [breakpoint, isBreakpoint] = useState();
  const [isOpenComingModal, openComingModal, closeComingModal] = useModal();

  useEffect(() => {
    breakpointObserver(breakpoints, isBreakpoint);
  }, [breakpoint]);
  return (
    <div className="theme-main">
      <Header breakpoint={breakpoint} openComingModal={openComingModal} />
      <AppRouter breakpoint={breakpoint} openComingModal={openComingModal} />

      {isOpenComingModal && (
        <ComingModal
          isOpenComingModal={isOpenComingModal}
          closeComingModal={closeComingModal}
        />
      )}
    </div>
  );
}
