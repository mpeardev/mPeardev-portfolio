import { Link } from "react-router-dom";

export function LogoHeader({ breakpoint }) {
  return (
    <div>
      <Link to="/">
        {breakpoint <= 640 && (
          <img
            src="../../../../src/assets/img/icon/icon-dark.png"
            alt="logo"
            style={{ width: "3rem" }}
          />
        )}
        {breakpoint <= 1024 && breakpoint > 640 && (
          <img
            src="../../../../src/assets/img/logo/logo-notebook-dark.png"
            alt="logo"
            style={{ width: "7rem" }}
          />
        )}
        {breakpoint >= 1280 && (
          <img
            src="../../../../src/assets/img/logo/logo-dark.png"
            alt="logo"
            style={{ width: "10rem" }}
          />
        )}
      </Link>
    </div>
  );
}
