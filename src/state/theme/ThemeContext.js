import { createContext } from "react";

export const initialThemeState = {
  theme: localStorage.globalTheme ? localStorage.globalTheme : "light",
  setTheme: () => null,
};

const ThemeContext = createContext(initialThemeState);
export default ThemeContext;
