import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../../../state/theme/ThemeContext";

export function Logo({ breakpoint }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Link to="/">
        {breakpoint <= 640 && (
          <img
            src={
              theme === "dark"
                ? "/icon/200x200/icon-dark.png"
                : theme === "light"
                ? "/icon/200x200/icon.png"
                : "/icon/200x200/icon.png"
            }
            alt="logo"
            style={{ width: "3rem" }}
          />
        )}
        {breakpoint <= 1024 && breakpoint > 640 && (
          <img
            src={
              theme === "dark"
                ? "/logo/logo-notebook-dark.png"
                : theme === "light"
                ? "/logo/logo-notebook.png"
                : "/logo/logo-notebook.png"
            }
            alt="logo"
            style={{ width: "7rem" }}
          />
        )}
        {breakpoint >= 1280 && (
          <img
            src={
              theme === "dark"
                ? "/logo/logo-dark.png"
                : theme === "light"
                ? "/logo/logo.png"
                : "/logo/logo.png"
            }
            alt="logo"
            style={{ width: "10rem" }}
          />
        )}
      </Link>
    </div>
  );
}
