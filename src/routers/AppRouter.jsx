import { Route, Routes } from "react-router-dom";
import { HomePage, GsapPage } from "../components";

export function AppRouter({ breakpoint }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage breakpoint={breakpoint} />} />
        <Route path="/gsap" element={<GsapPage />} />
      </Routes>
    </>
  );
}
