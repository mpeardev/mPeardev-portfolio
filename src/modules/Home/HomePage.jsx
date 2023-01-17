import { Home } from "./Home";

export function HomePage({ breakpoint, openComingModal }) {
  return (
    <>
      <div>
        <Home breakpoint={breakpoint} openComingModal={openComingModal} />
      </div>
    </>
  );
}
